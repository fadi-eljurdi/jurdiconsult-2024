import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/js/components/footer-section/index.html'),
    data() {
        return {
            store,
            utilities,
            firstSection:[
                {
                    text:'Home',
                    url:'/',
                },
                {
                    text:'Services',
                    url:'/services/',
                },
                {
                    text:'News & Insights',
                    url:'/blogs/',
                },
                {
                    text:'Privacy Policy',
                    url:'/docs/privacy-policy.html',
                },
                {
                    text:'Disclaimer',
                    url:'/docs/disclaimer.html',
                },
                {
                    text:'Terms & Conditions',
                    url:'/docs/terms.html',
                },
                {
                    text:'Acceptable Usage',
                    url:'/docs/acceptable-usage.html',
                },
                {
                    text:'Cookie Policy',
                    url:'/docs/cookie-policy.html',
                },
                {
                    text:'Contact',
                    url:'/contact/',
                },
                {
                    text:'Pay Online',
                    url:'https://buy.stripe.com/6oE4gNd6ffOadUI5kk',
                },
            ]
        }
    }
}