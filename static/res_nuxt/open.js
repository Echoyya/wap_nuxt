;(function(w, d) {
    const host = window.location.host
    let url = 'https://event.startimestv.com'
    if (host.indexOf('localhost') >= 0 || host.indexOf('qa') >= 0) {
        url = 'http://10.0.243.111:8080'
    }
    const commonLog = {
        al: 'en',
        bst: '0',
        car: '',
        curp: document.title,
        cr: 'unknown',
        ct: '',
        dch: '',
        dd: '',
        desp: '',
        durp: 0,
        di: 'unknown',
        did: '81be4cbc7b66cdbe06a61174170a8634',
        dr: '',
        iid: '',
        lst: '',
        lt: 'event',
        lv: '1.0.0',
        nt: '',
        os: 'Android',
        osl: navigator.language,
        osv: '',
        pid: '',
        pro: '',
        pst: '',
        sid: '',
        sim: '',
        srcp: '',
        ver: '',
        tt: new Date().getTime(),
        uid: 915288211,
        msg: {
            category: 'h5_open',
            action: 'document_loaded',
            label: window.location.pathname,
            value: 1
        }
    }

    const s = d.createElement('img')
    s.height = 1
    s.width = 1
    s.src =
        url +
        '/i?logtype=event&app_key=cd58cfb3e81658905d802cbe44b04683effbc7ed&events=' +
        JSON.stringify([commonLog]) +
        '&device_id=81be4cbc7b66cdbe06a61174170a8634' +
        '&timestamp=' +
        new Date().getTime()
})(window, document)
