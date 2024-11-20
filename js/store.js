import Page from './classes/Page.js'
export default {
    version: '1.2',
    devmode: false,
    OAuthUser: false,
    username: '',
    password: '',
    isLogedIn: false,
    geminiToken: '',
    api: 'https://script.google.com/macros/s/AKfycbw6sxToQom-x3kG4mac2DNBH7H-BIHicWOoPxkiRYMZgPUR8BzRi_nILY4RFR92zB6Z/exec',

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