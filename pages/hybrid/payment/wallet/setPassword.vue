<template>
    <div class="container">
        <div v-show="step==1" class="step1">
            <verify-tel ref="phone" :title="reset?$store.state.lang.confirm_phone_number:$store.state.lang.enter_phone_number" :disabled="reset" @canNext="canStep2=true" @passCode="goStep(6)" />
            <div v-if="!passIsSet" class="change-phone">
                <nuxt-link to="/hybrid/payment/wallet/resetPhone">{{$store.state.lang.change_phone_number}}</nuxt-link>
            </div>
            <div class="footer">
                <mButton :disabled="!canStep2" :text="$store.state.lang.text_onair_next" @click="goStep(2)" />
            </div>
        </div>
        <div v-show="step==2" class="step2">
            <div class="label">{{$store.state.lang.enter_SMS_code}}</div>
            <passInput ref="vscode" :length="4" :toggle-view="true" @endinput="canStep3=true" @inputing="canStep3=false" />
            <div class="footer">
                <mButton :disabled="!canStep3" :text="$store.state.lang.text_onair_next" @click="goStep(3)" />
            </div>
        </div>
        <div v-show="step==3" class="step2 step3">
            <div class="label">{{$store.state.lang.set_payment_password}}</div>
            <passInput ref="newpass" :toggle-view="true" :placeholder="$store.state.lang.set_6bit_password" @endinput="canStep4=true" @inputing="canStep4=false" />
            <div class="footer">
                <mButton :disabled="!canStep4" :text="$store.state.lang.text_onair_next" @click="goStep(4)" />
            </div>
        </div>
        <div v-show="step==4" class="step2 step4">
            <div class="label">{{$store.state.lang.confirm_password}}</div>
            <passInput ref="confirmpass" :toggle-view="true" :placeholder="$store.state.lang.confirm_password" @endinput="canStep5=true" @inputing="canStep5=false" />
            <div class="footer">
                <mButton :disabled="!canStep5" :text="$store.state.lang.pay_ok" @click="goStep(5)" />
            </div>
        </div>
    </div>
</template>
<script>
import verifyTel from '~/components/form/wallet_tel_verify'
import passInput from '~/components/password'
import mButton from '~/components/button'
import { invoke, getInvokeResult, commonPayAfter, payWithBalance, verifyWalletPass } from '~/functions/pay'
export default {
    layout: 'base',
    components: {
        verifyTel,
        passInput,
        mButton
    },
    data() {
        return {
            loadStatus: true,
            canStep2: false,
            canStep3: false,
            canStep4: false,
            canStep5: false,
            reset: false,
            step: 0,
            accountNo: null,
            channel: this.$route.query.channel || '',
            payToken: this.$route.query.payToken || '',
            card: this.$route.query.card, // paystack card
            passIsSet: this.$route.query.passIsSet || '',
            merchantAppId: '',
            time: 0,
            timer: null
        }
    },
    watch: {
        step(nv) {
            switch (nv) {
                case 1:
                    this.sendEvLog({
                        category: 'set_password',
                        action: 'phone_show',
                        label: 1,
                        value: this.reset ? 0 : 1,
                        merchant_app_id: this.merchantAppId,
                        data_source: 2
                    })
                    break
                case 2:
                    this.sendEvLog({
                        category: 'set_password',
                        action: 'sms_code_show',
                        label: 1,
                        value: this.reset ? 0 : 1,
                        merchant_app_id: this.merchantAppId,
                        data_source: 2
                    })
                    break
                case 3:
                    this.sendEvLog({
                        category: 'set_password',
                        action: 'set_step1',
                        label: 1,
                        value: this.reset ? 0 : 1,
                        merchant_app_id: this.merchantAppId,
                        data_source: 2
                    })
                    break
                case 4:
                    this.sendEvLog({
                        category: 'set_password',
                        action: 'set_step2',
                        label: 1,
                        value: this.reset ? 0 : 1,
                        merchant_app_id: this.merchantAppId,
                        data_source: 2
                    })
            }
        }
    },
    beforeRouteLeave(to, from, next) {
        this.$toastLoading()
        next()
    },
    mounted() {
        this.step = this.$route.query.dissphone ? 3 : 1
        const sessionPayToken = sessionStorage.getItem('payToken')
        const sessionChannel = sessionStorage.getItem('payChannel')
        const sessionAppId = sessionStorage.getItem('merchantAppId')
        const card = sessionStorage.getItem('card')
        if (!this.payToken && sessionPayToken) this.payToken = sessionPayToken
        if (!this.channel && sessionChannel) this.channel = sessionChannel
        if (!this.merchantAppId && sessionAppId) this.merchantAppId = sessionAppId
        if (!this.card && card) this.card = card
        const walletAccount = JSON.parse(window.sessionStorage.getItem('wallet'))
        this.accountNo = walletAccount.accountNo
        if (walletAccount.phone) {
            this.reset = true
            this.$refs.phone.setTel(walletAccount.phone.substr(3))
        }
    },
    methods: {
        goStep(num) {
            if (num === 3) {
                const vscode = this.$refs.vscode.password
                const tel = this.$refs.phone.tel
                const prefix = this.$refs.phone.prefix
                if (this.reset) {
                    this.$axios
                        .get(`/mobilewallet/uc/v2/accounts/${this.accountNo}/verify-code?phone=${prefix + tel}&verifyCode=${vscode}`)
                        .then(res => {
                            const data = res.data
                            if (data && data.code === 0) {
                                this.step = num
                            } else {
                                this.$alert(data.message)
                            }
                        })
                } else {
                    this.$axios.put(`/mobilewallet/v1/accounts/${this.accountNo}/phone?phone=${prefix + tel}&verifyCode=${vscode}`, {}).then(res => {
                        const data = res.data
                        if (data && data.code === 0) {
                            this.$alert(this.$store.state.lang.set_phone_succ, () => {
                                this.step = num
                            })
                        } else {
                            this.$alert(data.message)
                        }
                    })
                }
            } else if (num === 5) {
                const vscode = this.$refs.vscode.password
                const newpass = this.$refs.newpass.password
                const confirmpass = this.$refs.confirmpass.password
                if (newpass !== confirmpass) {
                    this.$alert(this.$store.state.lang.two_password_not_match)
                    return false
                }
                this.$axios
                    .put(`/mobilewallet/uc/v2/accounts/${this.accountNo}/pay-password?newPassword=${newpass}&verifyCode=${vscode}`, {})
                    .then(res => {
                        if (res.data && res.data.code === 0) {
                            this.pay()
                        } else {
                            this.$alert(res.data.message)
                        }
                        this.sendEvLog({
                            category: 'set_password',
                            action: 'set_result',
                            label: 1,
                            value: res.data.code === 0 ? 0 : 1,
                            merchant_app_id: this.merchantAppId,
                            data_source: 2
                        })
                    })
            } else if (num === 4) {
                const newpass = this.$refs.newpass.password
                const reg = /^[\d]+$/
                if (!reg.test(newpass)) {
                    this.$alert(this.$store.state.lang.enter_pure_numbers)
                    return false
                }
                this.step = num
            } else if (num === 6) {
                this.sendEvLog({
                    category: 'set_password',
                    action: 'get_phone_code',
                    label: 1,
                    value: this.reset ? 0 : 1,
                    merchant_app_id: this.merchantAppId,
                    data_source: 2
                })
            } else {
                this.step = num
            }
        },
        // state=1 至多循环20次
        getInvoke(seqNo) {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                if (this.time >= 20) {
                    clearTimeout(this.timer)
                    this.$toastLoading()
                    this.$alert(this.$store.state.lang.invoke_timeout_notice)
                    this.sendEvLog({
                        category: 'invoke_error_notice',
                        action: 'popup_show',
                        label: 'invoke_timeout_notice',
                        value: ''
                    })
                    this.time = 0
                    return false
                }
                this.paymentInitResult(seqNo)
                this.time++
            }, 3000)
        },
        // 异步获取invoke状态
        paymentInitResult(seqNo) {
            if (location.pathname.indexOf('hybrid/payment/wallet/setPassword') < 0) {
                clearTimeout(this.timer)
                return false
            }
            getInvokeResult.call(this, seqNo, result => {
                if (result.state == 1) {
                    this.getInvoke(seqNo)
                } else {
                    this.$toastLoading()
                    result.paySeqNo = result.seqNo
                    commonPayAfter.call(this, result, 3, 3)
                }
            })
        },
        pay() {
            const ewallet = JSON.parse(sessionStorage.getItem('wallet'))
            const newpass = this.$refs.newpass.password
            this.$toastLoading(1)
            verifyWalletPass.call(this, ewallet.accountNo, newpass, result => {
                if (this.card) {
                    invoke.call(
                        this,
                        this.payToken,
                        this.channel,
                        data => {
                            this.$toastLoading()
                            commonPayAfter.call(this, data, 3, 3)
                        },
                        seqNo => {
                            this.paymentInitResult(seqNo)
                        },
                        {
                            payPwdVerifyToken: result.data,
                            authorization_code: this.card
                        }
                    )
                } else {
                    invoke.call(this, this.payToken, this.channel, data => {
                        payWithBalance.call(
                            this,
                            this.accountNo,
                            data,
                            this.$refs.newpass.password,
                            res => {
                                this.$toastLoading()
                                window.location.href = `/hybrid/payment/payResult?seqNo=${data.paySeqNo}`
                            },
                            seqNo => {
                                this.paymentInitResult(seqNo)
                            }
                        )
                    })
                }
            })
        }
    },
    head() {
        return {
            title: this.reset ? this.$store.state.lang.reset_password : this.$store.state.lang.setting_password
        }
    }
}
</script>
<style lang="less" scoped>
.container {
    padding: 3rem 0.6rem;
    height: 100%;
    background: white;
    .step2 {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: white;
        z-index: 2;
        padding: 3rem 1rem;
    }
    .step3 {
        z-index: 3;
    }
    .change-phone-link {
        text-align: right;
        a {
            color: #0087eb;
            text-decoration: underline;
            font-size: 0.9rem;
            font-weight: bold;
        }
    }
}
.footer {
    position: fixed;
    bottom: 3rem;
    width: 75%;
    margin: 0 auto;
    left: 0;
    right: 0;
    text-align: center;
    a {
        color: #0087eb;
        text-decoration: underline;
        font-size: 0.8rem;
        font-weight: bold;
    }
}
.change-phone {
    text-align: right;
    text-decoration: underline;
    a {
        color: #0087eb;
    }
}
</style>
