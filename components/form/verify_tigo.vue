<template>
    <div>
        <p class="label">
            {{input_label}}
        </p>
        <div class="input-tel">
            <div class="prefix">
                {{prefix}}
            </div>
            <div class="number">
                <input v-model="tel" type="Number" placeholder="9 digits total">
            </div>
            <div v-show="show_error" class="error">
                {{error_tel}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        prefix: {
            type: String,
            required: true
        },
        inputLabel: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            tel: '',
            show_error: false,
            error_tel: ''
        }
    },
    watch: {
        tel(nv, ov) {
            this.show_error = false
            if (nv.length > 9) {
                this.tel = nv.slice(0, 9)
            }
        }
    },
    methods: {
        setTel(tel) {
            this.tel = tel.substr(tel.length - 9, 9)
        }
    }
}
</script>
<style lang="less" scoped>
.label {
    font-size: 1.2rem;
}
.input-tel {
    border-bottom: #dddddd solid 1px;
    display: -webkit-box;
    display: flex;
    padding-bottom: 5px;
    margin: 1rem 0 2rem;
    position: relative;
    .prefix {
        max-width: 3.5rem;
        border-right: #dddddd solid 1px;
        line-height: 1.5rem;
        height: 1.5rem;
        float: left;
        -webkit-box-flex: 1;
        flex: 1;
    }
    .number {
        -webkit-box-flex: 11;
        flex: 5;
        input {
            width: 100%;
            border: none;
            display: block;
            padding: 0 0.5rem;
            height: 1.5rem;
            line-height: 1.5rem;
            outline: none;
        }
    }
    .error {
        position: absolute;
        bottom: -1.4rem;
        font-size: 0.8rem;
        color: red;
    }
}
</style>
