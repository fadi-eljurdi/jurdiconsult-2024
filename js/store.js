import Page from './classes/Page.js'
export default {
    version: '1.2',
    brandname:'Jurdi Media Consultants',
    logo: '/assets/logo-rbg.png',
    devmode: false,
    OAuthUser: false,
    username: '',
    password: '',
    isLogedIn: false,
    geminiToken: '',
    api: 'https://script.google.com/macros/s/AKfycbxlMGOU2_dHfCMz3ArjHlA-OaYXXxQw_Hasj1gQJWv-dAD7eo5ZZpilgpl-ypwK_PC-/exec',

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