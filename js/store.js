import Page from './classes/Page.js'
export default {
    version: '1.3',
    brandname:'Jurdi Media Production Consultants',
    logo: '/assets/logo-rbg.png',
    devmode: false,
    OAuthUser: false,
    username: '',
    password: '',
    isLogedIn: false,
    geminiToken: '',
    // api: 'https://script.google.com/macros/s/AKfycbxlMGOU2_dHfCMz3ArjHlA-OaYXXxQw_Hasj1gQJWv-dAD7eo5ZZpilgpl-ypwK_PC-/exec',
    api:'https://script.google.com/macros/s/AKfycbywZNgKV_Mp7SKrkfA2oOIvt26cq0V3u2kLeQcBlOCAXIlRFgLAOZyhBOeN5TdRaRky/exec',

    spinner: false,
    services: [],
    blogs: [],
    contact: {},
    nextContact: {},
    nextPage: new Page(),
    navbarBg: 'bg-transparent',
    nextUpdatedPage: new Page(),
    togNewsLetter: false

}