<template>
    <div class="download" @click="down">
        <div>
            <img src="~assets/img/web/app_icon.png" />
            <div>
                <p>StarTimes ON App</p>
                <span>{{$store.state.lang.officialwebsitemobile_install_to_watch}}</span>
            </div>
            <span class="down">{{$store.state.lang.officialwebsitemobile_install}}</span>
        </div>
    </div>
</template>
<script>
import { callupFlow } from '~/functions/app'
export default {
    props: {
        page: {
            required: false,
            type: String,
            default: ''
        },
        downApk: {
            required: false,
            type: Boolean,
            default: true
        }
    },
    mounted() {
        this.sendEvLog({
            category: 'callup_app',
            action: 'install_promo_show',
            label: this.$route.path,
            value: 1
        })
    },
    methods: {
        down() {
            this.sendEvLog({
                category: 'callup_app',
                action: 'install_promo_click',
                label: this.$route.path,
                value: 1
            })
            let page = this.page || ''

            if (this.$route.path.indexOf('program/subdetail/') >= 0) {
                page = `com.star.mobile.video.player.PlayerVodActivity?vodId=${this.$route.params.id}`
            } else if (this.$route.path.indexOf('program/detail/') >= 0) {
                page = `com.star.mobile.video.player.PlayerVodActivity?programDetailId=${this.$route.params.id}`
            } else if (this.$route.path.indexOf('liveDetail') >= 0) {
                page = `com.star.mobile.video.player.PlayerLiveActivity?channelID=${this.$route.query.channelId}`
            }
            this.$nuxt.$loading.start()
            callupFlow.call(this, page)
        }
    }
}
</script>
<style lang="less" scoped>
.download {
    padding: 0.5rem 0.8rem;
    background-color: #b7b7b7;
    color: #333333;
    overflow: hidden;
    zoom: 1;
    top: 3.45rem;
    position: fixed;
    width: 100%;
    z-index: 999;
    height: 4rem;
    & > div {
        position: relative;
        img {
            width: 3rem;
        }
        div {
            font-weight: bold;
            width: 45%;
            font-size: 0.88rem;
            margin-left: 0.5rem;
            display: inline-block;
            vertical-align: middle;
            line-height: 1.3rem;
        }
        .down {
            background-color: #0087eb;
            width: 4.5rem;
            color: #ffffff;
            border-radius: 2px;
            height: 2rem;
            position: absolute;
            right: 0;
            top: 0.5rem;
            line-height: 2rem;
            text-align: center;
        }
    }
}
</style>
