import { getCookie } from '~/functions/utils'
let auth_ignore = [
    /^\/hybrid\/account\/login/,
    /^\/hybrid\/account\/logout/,
    /^\/hybrid\/account\/tokenfail/,
    /^\/hybrid\/account\/signin/,
    /^\/hybrid\/account\/register/,
    /^\/hybrid\/account\/setpass/,
    /^\/hybrid\/account\/resetpass/,
    /^\/hybrid\/payment\/channelDesc/,
    /^\/hybrid\/payment\/payResult/,
    /^\/hybrid\/payment\/form/,
    /^\/hybrid\/payment\/methods/,
    /^\/hybrid\/faq/,
    /^\/hybrid\/packet/,
    /^\/hybrid\/lands/,
    /^\/hybrid\/tools/,
    /^\/hybrid\/vote/,
    /^\/hybrid\/questionNaire/,
]
function inIgnore(url) {
    let result = false
    auth_ignore.forEach(item => {
        if (item.test(url)) {
            result = true
        }
    })
    return result
}
export default ({ app: { router }, store }) => {
    let isLogin = store.state.user.type
    router.beforeEach((to, from, next) => {
        if (!inIgnore(to.path)) {
            if (isLogin) {
                next()
            } else {
                if (store.state.appType == 1) {
                    window.getChannelId.isLogin()

                    //next('/hybrid/account/tokenfail?pre=' + encodeURIComponent(to.fullPath))
                } else if (store.state.appType == 2) {
                    next('/hybrid/account/tokenfail?pre=' + encodeURIComponent(to.fullPath))
                } else {
                    next('/hybrid/account/login?pre=' + encodeURIComponent(to.fullPath))
                }
            }
        } else {
            next()
        }
    })
}
