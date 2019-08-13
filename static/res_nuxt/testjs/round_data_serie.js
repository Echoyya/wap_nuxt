/**
 *type  1  可以直播
 * type 2  不可以直播
 * time 时间戳
 * @type {{type: 类型, url: 播放地址, time: 用于比较球赛是否开始的时间, date: 显示时间, leftName: string, rightName: string, leftIcon: 左边的球队图标, rightIcon: string, center: string, bouquet: string, channel: string}[]}
 */
var matchData0 = [
    {"type":"1","url":"Serie_A/1_Hellas_v_Roma/","time":"1440259200000","leftName":"Hellas Verona","rightName":"Roma","leftIcon":"image/Hellas_Verona.png","rightIcon":"image/roma.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":""},
    {"type":"1","url":"Serie_A/1_Juve_v_Udin/","time":"1440345600000","leftName":"Juventus","rightName":"Udinese","leftIcon":"image/Juventus.png","rightIcon":"image/Udinese.png","bouquet":"Unique","channel":"Sports Premium","channel_url":"skip('0','','302')","programId":""},
    {"type":"1","url":"Serie_A/1_Fiore_v_Milan/","time":"1440355500000","leftName":"Fiorentina","rightName":"Milan","leftIcon":"image/Fiorentina.png","rightIcon":"image/AC_Milan.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":""},
    {"type":"1","url":"Serie_A/1_Inter_v_Atala/","time":"1440355500000","leftName":"Inter","rightName":"Atalanta","leftIcon":"image/Internazionale.png","rightIcon":"image/Atalanta.png","bouquet":"Unique","channel":"Sports Premium","channel_url":"skip('0','','302')","programId":""},
    {"type":"1","url":"Serie_A/1_Sass_v_Napo/","time":"1440355500000","leftName":"Sassuolo","rightName":"Napoli","leftIcon":"image/Sassuolo_Calcio.png","rightIcon":"image/Napoli.png","bouquet":"Classic","channel":"Sports Arena","channel_url":"skip('0','','445')","programId":""},
];
var matchData1 = [
    {"type":"1","url":"Serie_A/2_Milan_v_Emp/","time":"1440873900000","leftName":"Milan","rightName":"Empoli","leftIcon":"image/AC_Milan.png","rightIcon":"image/Empoli.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":""},
    {"type":"1","url":"Serie_A/2_Roma_v_Juve/","time":"1440950400000","leftName":"Roma","rightName":"Juventus","leftIcon":"image/roma.png","rightIcon":"image/Juventus.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":""},
    {"type":"1","url":"Serie_A/2_Car_v_Inter/","time":"1440960300000","leftName":"Carpi","rightName":"Inter","leftIcon":"image/Carpi_FC.png","rightIcon":"image/Internazionale.png","bouquet":"Classic","channel":"Sports Arena","channel_url":"skip('0','','445')","programId":""},
    {"type":"1","url":"Serie_A/2_Napo_v_Fiore/","time":"1440960300000","leftName":"Napoli","rightName":"Sampdoria","leftIcon":"image/Napoli.png","rightIcon":"image/Sampdoria.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":""},
    {"type":"1","url":"Serie_A/2_Tor_v_Fiore/","time":"1440960300000","leftName":"Torino","rightName":"Fiorentina","leftIcon":"image/torino.png","rightIcon":"image/Fiorentina.png","bouquet":"Unique","channel":"Sports Premium","channel_url":"skip('0','','302')","programId":""},
    {"type":"2","url":"Serie_A/2_v_Chie_Laz/","time":"1441198800000","leftName":"Chievoverona","rightName":"Lazio","leftIcon":"image/Chievo_Verona.png","rightIcon":"image/SS_Lazio.png","bouquet":"Classic","channel":"Sports Arena","channel_url":"skip('0','','445')","programId":""},
];
var matchData2 = [
    {"type":"1","url":"Serie_A/3_Fros_v_Roma/","time":"1442073600000","leftName":"Frosinone","rightName":"Roma","leftIcon":"image/Frosinone.png","rightIcon":"image/roma.png","bouquet":"Basic","channel":"Sports Life","channel_url":"skip('0','','443')","programId":"898090"},
    {"type":"1","url":"Serie_A/3_Juve_v_Chie/","time":"1442083500000","leftName":"Juventus","rightName":"Chievoverona","leftIcon":"image/Juventus.png","rightIcon":"image/Chievo_Verona.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"897834"},
    {"type":"1","url":"Serie_A/3_Hellas_v_Tor/","time":"1442140200000","leftName":"Hellas Verona","rightName":"Torino","leftIcon":"image/Hellas_Verona.png","rightIcon":"image/torino.png","bouquet":"Nova","channel":"Sports Focus","channel_url":"skip('0','','266')","programId":"897710"},
    {"type":"1","url":"Serie_A/3_Emp_v_Napo/","time":"1442149200000","leftName":"Empoli","rightName":"Napoli","leftIcon":"image/Empoli.png","rightIcon":"image/Napoli.png","bouquet":"Classic","channel":"Sports Arena","channel_url":"skip('0','','445')","programId":"897365"},
    {"type":"1","url":"Serie_A/3_Inter_v_Milan/","time":"1442169900000","leftName":"Inter","rightName":"Milan","leftIcon":"image/torino.png","rightIcon":"image/AC_Milan.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"897851"},
];
var matchData3 = [
    {"type":"1","url":"Serie_A/4_Udin_v_Emp_1/","time":"1442678400000","leftName":"Udinese","rightName":"Empoli","leftIcon":"image/Udinese.png","rightIcon":"image/Empoli.png","bouquet":"Unique","channel":"Sports Premium","channel_url":"skip('0','','302')","programId":"921619"},
    {"type":"1","url":"Serie_A/4_Milan_v_Paler_1/","time":"1442688300000","leftName":"Milan ","rightName":"Palermo","leftIcon":"image/AC_Milan.png","rightIcon":"image/Palermo.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"922693"},
    {"type":"1","url":"Serie_A/4_Chie_v_Inter_1/","time":"1442745000000","leftName":"Chievoverona","rightName":"Inter","leftIcon":"image/Chievo_Verona.png","rightIcon":"image/Internazionale.png","bouquet":"Classic","channel":"Sports Arena","channel_url":"skip('0','','445')","programId":"921191"},
    {"type":"1","url":"Serie_A/4_Genoa_v_Juve_1/","time":"1442754000000","leftName":"Genoa","rightName":"Juventus","leftIcon":"image/Genoa.png","rightIcon":"image/Juventus.png","bouquet":"Classic","channel":"Sports Arena","channel_url":"skip('0','','445')","programId":"921192"},
    {"type":"1","url":"Serie_A/4_Roma_v_Sass_1/","time":"1442754000000","leftName":"Roma","rightName":"Sassuolo","leftIcon":"image/roma.png","rightIcon":"image/Sassuolo_Calcio.png","bouquet":"Basic","channel":"Sports Life","channel_url":"skip('0','','443')","programId":"921497"},
    {"type":"1","url":"Serie_A/4_Napo_v_Laz_1/","time":"1442774700000","leftName":"Napoli","rightName":"Lazio","leftIcon":"image/Napoli.png","rightIcon":"image/SS_Lazio.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"922709"},
];
var matchData4 = [
    {"type":"1","url":"Serie_A/5_Udin_v_Milan/","time":"1442947500000","leftName":"Udinese","rightName":"Milan","leftIcon":"image/Udinese.png","rightIcon":"image/AC_Milan.png","bouquet":"Basic","channel":"Sports Life","channel_url":"skip('0','','443')","programId":"945412"},
    {"type":"1","url":"Serie_A/5_Inter_v_Hellas/","time":"1443033900000","leftName":"Inter ","rightName":"Hellas Verona","leftIcon":"image/Internazionale.png","rightIcon":"image/Hellas_Verona.png","bouquet":"Classic","channel":"Sports Arena","channel_url":"skip('0','','445')","programId":"944853"},
    {"type":"1","url":"Serie_A/5_Juve_v_Fros/","time":"1443033900000","leftName":"Juventus","rightName":"Frosinone","leftIcon":"image/Juventus.png","rightIcon":"image/Frosinone.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"944574"},
    {"type":"2","url":"","time":"1443099600000","leftName":"Lazio","rightName":"Genoa","leftIcon":"image/SS_Lazio.png","rightIcon":"image/Genoa.png","bouquet":"Classic","channel":"Sports Arena","channel_url":"skip('0','','445')","programId":""},
    {"type":"1","url":"Serie_A/5_Emp_v_Atala/","time":"1443120300000","leftName":"Empoli","rightName":"Atalanta","leftIcon":"image/Empoli.png","rightIcon":"image/Atalanta.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"944593"},
    {"type":"2","url":"","time":"1443123000000","leftName":"Sampdoria","rightName":"Roma","leftIcon":"image/Sampdoria.png","rightIcon":"image/roma.png","bouquet":"Unique","channel":"Sports Premium","channel_url":"skip('0','','302')","programId":""},
    {"type":"2","url":"","time":"1443182400000","leftName":"Carpi","rightName":"Napoli","leftIcon":"image/Carpi_FC.png","rightIcon":"image/Napoli.png","bouquet":"Nova","channel":"Sports Focus","channel_url":"skip('0','','266')","programId":""},
    {"type":"2","url":"","time":"1443211200000","leftName":"Fiorentina","rightName":"Bologna","leftIcon":"image/Fiorentina.png","rightIcon":"image/Bologna.png","bouquet":"Nova","channel":"Sports Focus","channel_url":"skip('0','','266')","programId":""},
    {"type":"2","url":"","time":"1443274200000","leftName":"Chievoverona","rightName":"Torino","leftIcon":"image/Chievo_Verona.png","rightIcon":"image/torino.png","bouquet":"Basic","channel":"Sports Life","channel_url":"skip('0','','443')","programId":""},
    {"type":"2","url":"","time":"1443384000000","leftName":"Palermo","rightName":"Sassuolo","leftIcon":"image/Palermo.png","rightIcon":"image/Sassuolo_Calcio.png","bouquet":"Nova","channel":"Sports Focus","channel_url":"skip('0','','266')","programId":""},
];
var matchData5 = [
    {"type":"1","url":"Serie_A/6_Roma_v_Carpi/","time":"1443283200000","leftName":"Roma","rightName":"Carpi","leftIcon":"image/roma.png","rightIcon":"image/Carpi_FC.png","bouquet":"Classic","channel":"Sports Arena","channel_url":"skip('0','','445')","programId":"944920"},
    {"type":"1","url":"Serie_A/6_Napo_v_Juve/","time":"1443293100000","leftName":"Napoli ","rightName":"Juventus","leftIcon":"image/Napoli.png","rightIcon":"image/Juventus.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"944632"},
    {"type":"1","url":"Serie_A/6_Genoa_v_Milan/","time":"1443349800000","leftName":"Genoa","rightName":"Milan","leftIcon":"image/Genoa.png","rightIcon":"image/AC_Milan.png","bouquet":"Unique","channel":"Sports Premium","channel_url":"skip('0','','302')","programId":"944779"},
    {"type":"1","url":"Serie_A/6_Hellas_v_Laz/","time":"1443360600000","leftName":"Hellas Verona","rightName":"Lazio","leftIcon":"image/Hellas_Verona.png","rightIcon":"image/SS_Lazio.png","bouquet":"Classic","channel":"Sports Arena","channel_url":"skip('0','','445')","programId":"944935"},
    {"type":"1","url":"Serie_A/6_Inter_v_Fiore/","time":"1443379500000","leftName":"Inter","rightName":"Fiorentina","leftIcon":"image/Internazionale.png","rightIcon":"image/Fiorentina.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"944648"},
    {"type":"2","url":"","time":"1443556800000","leftName":"Torino","rightName":"Palermo","leftIcon":"image/torino.png","rightIcon":"image/Palermo.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":""},
    {"type":"2","url":"","time":"1443618000000","leftName":"Sassuolo","rightName":"Chievoverona","leftIcon":"image/Sassuolo_Calcio.png","rightIcon":"image/Chievo_Verona.png","bouquet":"Classic","channel":"Sports Arena","channel_url":"skip('0','','445')","programId":""},
    {"type":"2","url":"","time":"1443643200000","leftName":"Bologna","rightName":"Udinese","leftIcon":"image/Bologna.png","rightIcon":"image/Udinese.png","bouquet":"Unique","channel":"Sports Premium","channel_url":"skip('0','','302')","programId":""},
];
var matchData6 = [
    {"type":"1","url":"Serie_A/7_Carpi_v_Tor/","time":"1443868200000","leftName":"Carpi","rightName":"Torino","leftIcon":"image/Carpi_FC.png","rightIcon":"image/torino.png","bouquet":"Unique","channel":"Sports Premium","channel_url":"skip('0','','302')","programId":"966933"},
    {"type":"1","url":"Serie_A/7_Chie_v_Hellas/","time":"1443897900000","leftName":"Chievoverona ","rightName":"Hellas Verona","leftIcon":"image/Chievo_Verona.png","rightIcon":"image/Hellas_Verona.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"967070"},
    {"type":"1","url":"Serie_A/7_Emp_v_Sass/","time":"1443954600000","leftName":"Empoli","rightName":"Sassuolo","leftIcon":"image/Empoli.png","rightIcon":"image/Sassuolo_Calcio.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"967081"},
    {"type":"1","url":"Serie_A/7_Paler_v_Roma/","time":"1443963600000","leftName":"Palermo","rightName":"Roma","leftIcon":"image/Palermo.png","rightIcon":"image/roma.png","bouquet":"Classic","channel":"Sports Arena","channel_url":"skip('0','','445')","programId":"966516"},
    {"type":"1","url":"Serie_A/7_Sam_v_Inter/","time":"1443963600000","leftName":"Sampdoria","rightName":"Inter","leftIcon":"image/Sampdoria.png","rightIcon":"image/Internazionale.png","bouquet":"Basic","channel":"Sports Life","channel_url":"skip('0','','443')","programId":"966816"},
    {"type":"1","url":"Serie_A/7_Laz_v_Fros/","time":"1443974400000","leftName":"Lazio","rightName":"Frosinone","leftIcon":"image/SS_Lazio.png","rightIcon":"image/Frosinone.png","bouquet":"Nova","channel":"Sports Focus","channel_url":"skip('0','','266')","programId":"966693"},
    {"type":"1","url":"Serie_A/7_Juve_v_Bolo/","time":"1443974400000","leftName":"Juventus","rightName":"Bologna","leftIcon":"image/Juventus.png","rightIcon":"image/Chievo_Verona.png","bouquet":"Unique","channel":"Sports Premium","channel_url":"skip('0','','302')","programId":"966951"},
    {"type":"1","url":"Serie_A/7_Fiore_v_Atala/","time":"1443984300000","leftName":"Fiorentina","rightName":"Atalanta","leftIcon":"image/Fiorentina.png","rightIcon":"image/Atalanta.png","bouquet":"Unique","channel":"Sports Premium","channel_url":"skip('0','','302')","programId":"966953"},
    {"type":"1","url":"Serie_A/7_Milan_v_Napo/","time":"1443984300000","leftName":"Milan","rightName":"Napoli","leftIcon":"image/AC_Milan.png","rightIcon":"image/Napoli.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"967086"},
    {"type":"2","url":"Serie_A/7_Udin_v_Genoa/","time":"1444063200000","leftName":"Udinese","rightName":"Genoa","leftIcon":"image/Udinese.png","rightIcon":"image/Genoa.png","bouquet":"Basic","channel":"Sports Life","channel_url":"skip('0','','443')","programId":""},
];
var matchData7 = [
    {"type":"1","url":"Serie_A/8_ROM_v_EMP/","time":"1445097600000","leftName":"Roma","rightName":"Empoli","leftIcon":"image/roma.png","rightIcon":"image/Empoli.png","bouquet":"Unique","channel":"Sports Premium","channel_url":"skip('0','','302')","programId":"1024754"},
    {"type":"1","url":"Serie_A/8_TOR_v_MIL/","time":"1445107500000","leftName":"Torino ","rightName":"Milan","leftIcon":"image/torino.png","rightIcon":"image/AC_Milan.png","bouquet":"Unique","channel":"Sports Premium","channel_url":"skip('0','','302')","programId":"1024756"},
    {"type":"1","url":"Serie_A/8_NAP_v_FRT/","time":"1445173200000","leftName":"Napoli","rightName":"Fiorentina","leftIcon":"image/Napoli.png","rightIcon":"image/Fiorentina.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"1025184"},
    {"type":"1","url":"Serie_A/8_SAS_v_LAZ/","time":"1445173200000","leftName":"Sassuolo","rightName":"Lazio","leftIcon":"image/Sassuolo_Calcio.png","rightIcon":"image/SS_Lazio.png","bouquet":"Classic","channel":"Sports Arena","channel_url":"skip('0','','445')","programId":"1024923"},
    {"type":"1","url":"Serie_A/8_INT_v_JUV/","time":"1445193900000","leftName":"Inter","rightName":"Juventus","leftIcon":"image/Internazionale.png","rightIcon":"image/Juventus.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"1025187"},
];
var matchData8 = [
    {"type":"1","url":"Serie_A/9_EMP_VS_GEN/","time":"1445691600000","leftName":"Empoli","rightName":"Genoa","leftIcon":"image/Empoli.png","rightIcon":"image/Genoa.png","bouquet":"Basic","channel":"Sports Life","channel_url":"skip('0','','443')","programId":"1047774"},
    {"type":"1","url":"Serie_A/9_CAP_VS_BOL/","time":"1445702400000","leftName":"Carpi ","rightName":"Bologna","leftIcon":"image/Carpi_FC.png","rightIcon":"image/Bologna.png","bouquet":"Unique","channel":"Sports Premium","channel_url":"skip('0','','302')","programId":"1047655"},
    {"type":"1","url":"Serie_A/9_PAL_VS_INT/","time":"1445712300000","leftName":"Palermo","rightName":"Inter","leftIcon":"image/Palermo.png","rightIcon":"image/Internazionale.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"1047179"},
    {"type":"1","url":"Serie_A/9_SPD_VS_VER/","time":"1445772600000","leftName":"Sampdoria","rightName":"Hellas Verona","leftIcon":"image/Sampdoria.png","rightIcon":"image/Hellas_Verona.png","bouquet":"Unique","channel":"Sports Premium","channel_url":"skip('0','','302')","programId":"1047669"},
    {"type":"1","url":"Serie_A/9_JUV_VS_ATL/","time":"1445781600000","leftName":"Juventus","rightName":"Atalanta","leftIcon":"image/Juventus.png","rightIcon":"image/Atalanta.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"1047194"},
    {"type":"1","url":"Serie_A/9_UDI_VS_FSN/","time":"1445781600000","leftName":"Udinese","rightName":"Frosinone","leftIcon":"image/Udinese.png","rightIcon":"image/Frosinone.png","bouquet":"Nova","channel":"Sports Focus","channel_url":"skip('0','','266')","programId":"1047362"},
    {"type":"1","url":"Serie_A/9_MIL_VS_SAS/","time":"1445781600000","leftName":"Milan ","rightName":"Sassuolo","leftIcon":"image/AC_Milan.png","rightIcon":"image/Sassuolo_Calcio.png","bouquet":"Classic","channel":"Sports Arena","channel_url":"skip('0','','445')","programId":"1047531"},
    {"type":"1","url":"Serie_A/9_FRT_VS_ROM/","time":"1445792400000","leftName":"Fiorentina","rightName":"Roma","leftIcon":"image/Fiorentina.png","rightIcon":"image/roma.png","bouquet":"Unique","channel":"Sports Premium","channel_url":"skip('0','','302')","programId":"1047672"},
    {"type":"1","url":"Serie_A/9_LAZ_VS_TOR/","time":"1445792400000","leftName":"Lazio","rightName":"Torino","leftIcon":"image/SS_Lazio.png","rightIcon":"image/torino.png","bouquet":"Classic","channel":"Sports Arena","channel_url":"skip('0','','445')","programId":"1047533"},
    {"type":"1","url":"Serie_A/9_CVR_VS_NAP/","time":"1445802300000","leftName":"Chievoverona","rightName":"Napoli","leftIcon":"image/Chievo_Verona.png","rightIcon":"image/Napoli.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"1047197"},
];
var matchData9 = [
    {"type":"1","url":"Serie_A/10_BOL_VS_INT/","time":"1445975100000","leftName":"Bologna","rightName":"Inter","leftIcon":"image/Bologna.png","rightIcon":"image/Internazionale.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"1069764"},
    {"type":"1","url":"Serie_A/10_NAP_VS_PAL/","time":"1446061500000","leftName":"Napoli ","rightName":"Palermo","leftIcon":"image/Napoli.png","rightIcon":"image/Palermo.png","bouquet":"Unique","channel":"Sports Premium","channel_url":"skip('0','','302')","programId":"1069924"},
    {"type":"1","url":"Serie_A/10_ROM_VS_UDI/","time":"1446061500000","leftName":"Roma","rightName":"Udinese","leftIcon":"image/roma.png","rightIcon":"image/Udinese.png","bouquet":"Classic","channel":"Sports Arena","channel_url":"skip('0','','445')","programId":"1070074"},
    {"type":"1","url":"Serie_A/10_SAS_VS_JUV/","time":"1446061500000","leftName":"Sassuolo","rightName":"Juventus","leftIcon":"image/Sassuolo_Calcio.png","rightIcon":"image/Juventus.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"1069786"},
    {"type":"1","url":"Serie_A/10_SPD_VS_EMP/","time":"1446147900000","leftName":"Sampdoria","rightName":"Sampdoria","leftIcon":"image/Juventus.png","rightIcon":"image/Empoli.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"1069806"},
];
var matchData10 = [
    {"type":"1","url":"Serie_A/11_JUV_VS_TOR/","time":"1446310800000","leftName":"Juventus","rightName":"Torino","leftIcon":"image/Juventus.png","rightIcon":"image/torino.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"1070885"},
    {"type":"1","url":"Serie_A/11_INT_VS_ROM/","time":"1446320700000","leftName":"Inter ","rightName":"Roma","leftIcon":"image/Internazionale.png","rightIcon":"image/roma.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"1070887"},
    {"type":"1","url":"Serie_A/11_FRT_VS_FSN/","time":"1446377400000","leftName":"Fiorentina","rightName":"Frosinone","leftIcon":"image/Fiorentina.png","rightIcon":"image/Frosinone.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"1070898"},
    {"type":"1","url":"Serie_A/11_BOL_VS_ATL/","time":"1446386400000","leftName":"Bologna","rightName":"Atalanta","leftIcon":"image/Bologna.png","rightIcon":"image/Atalanta.png","bouquet":"Basic","channel":"Sports Life","channel_url":"skip('0','','443')","programId":"1070622"},
    {"type":"1","url":"Serie_A/11_CAP_VS_VER/","time":"1446386400000","leftName":"Carpi","rightName":"Hellas Verona","leftIcon":"image/Carpi_FC.png","rightIcon":"image/Hellas_Verona.png","bouquet":"Nova","channel":"Sports Focus","channel_url":"skip('0','','266')","programId":"1070309"},
    {"type":"1","url":"Serie_A/11_GEN_VS_NAP/","time":"1446386400000","leftName":"Genoa","rightName":"Napoli","leftIcon":"image/Genoa.png","rightIcon":"image/Napoli.png","bouquet":"Unique","channel":"World Football","channel_url":"skip('0','','444')","programId":"1070899"},
    {"type":"1","url":"Serie_A/11_UDI_VS_SAS/","time":"1446386400000","leftName":"Udinese ","rightName":"Sassuolo","leftIcon":"image/Udinese.png","rightIcon":"image/Sassuolo_Calcio.png","bouquet":"Classic","channel":"Sports Arena","channel_url":"skip('0','','445')","programId":"1071549"},
    {"type":"1","url":"Serie_A/11_LAZ_VS_MIL/","time":"1446407100000","leftName":"Lazio","rightName":"Milan","leftIcon":"image/SS_Lazio.png","rightIcon":"image/AC_Milan.png","bouquet":"Unique","channel":"Sports Premium","channel_url":"skip('0','','302')","programId":"1070768"},
    {"type":"1","url":"Serie_A/11_CVR_VS_SPD/","time":"1446487200000","leftName":"Chievoverona","rightName":"Sampdoria","leftIcon":"image/Chievo_Verona.png","rightIcon":"image/Sampdoria.png","bouquet":"Basic","channel":"Sports Life","channel_url":"skip('0','','443')","programId":""},
    {"type":"1","url":"Serie_A/11_PAL_VS_EMP/","time":"1446494400000","leftName":"Palermo","rightName":"Empoli","leftIcon":"image/Palermo.png","rightIcon":"image/Empoli.png","bouquet":"Unique","channel":"Sports Premium","channel_url":"skip('0','','302')","programId":""},
];




