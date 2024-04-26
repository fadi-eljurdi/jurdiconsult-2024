import Page from './classes/Page.js'
export default {
    version: '1.4',
    devmode:false,
    OAuthUser: false,
    username: '',
    password: '',
    isLogedIn: false,
    geminiToken: '',
    api: 'https://script.google.com/macros/s/AKfycbyjhwUTaaJR2-TiiQGsBaSQ5DNUPfg5p8prWH4Vt0I1v5xVW5ocYhuKL4HUpzCRuIg_/exec',

    spinner: false,
    services: [],
    blogs: [],
    contact: {},
    nextContact: {},
    nextPage: new Page(),
    navbarBg: 'bg-transparent',
    nextUpdatedPage: new Page()

}