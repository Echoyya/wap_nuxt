const authIgnore = [
    /^\/hybrid\/account\/login/,
    /^\/hybrid\/account\/logout/,
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
    /^\/browser/,
    /^\/hybrid\/questionNaire\/asintado/,
    /^\/hybrid\/questionNaire\/asintadoResult/,
    /^\/hybrid\/questionNaire\/america_guess/,
    /^\/hybrid\/dvb\/bind/,
    /^\/hybrid\/dvb\/order/,
]
const inIgnore = url => {
    let result = false
    authIgnore.forEach(item => {
        if (item.test(url)) {
            result = true
        }
    })
    return result
}

export default ({ app, store, route, redirect,$axios }) => {
    const user = store.state.user
    const isLogin = user.roleName && user.roleName.toUpperCase() !== 'ANONYMOUS'
    if (!inIgnore(route.fullPath)) {
        if (!isLogin) {
            if (store.state.appType > 0) {
                store.commit('SET_NEED_LOGIN', true)
            } else {
                redirect('/hybrid/account/login?pre=' + encodeURIComponent(route.fullPath))
            }
        }
    }
    
}
