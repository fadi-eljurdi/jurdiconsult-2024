import './packages/day.min.js'
import './packages/relativetime.min.js'
import './packages/bootstrap.min.js'
import './packages/swiper.min.js'
import store from './store.js'
import utilities from './utilities.js'

import Blog from './classes/Blog.js'
import Service from './classes/Service.js'
import Contact from './classes/Contact.js'
const app = Vue.createApp({
    data() {
        return {
            store,
            utilities,
            spinner: false,
            translated: false,
            
            docs:[
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
                }
            ]
        }
    },
    methods: {

        async getProfile() {
            try {
                this.store.spinner = true
                fetch(this.store.api + '?getProfile').then(res => res.json()).then(res => {
                    console.log(res);

                    // this.store.links = res.links.map(node => new Link(node))
                    this.store.blogs = res.data.blogs.map(node => new Blog(node))
                    this.store.services = res.data.services.map(node => new Service(node))
                    this.store.contact = new Contact(res.data.contact)
                    console.log(this.store.services);
                    this.store.spinner = false
                })

            } catch (err) {
                alert('Weak network Please refresh the page!')
                console.log(err);
                this.store.spinner = false
            }

        },
        openLink(url) {
            const width = 600;
            const height = 400;
            const left = (screen.width - width) / 2;
            const top = (screen.height - height) / 2;

            window.open(url, 'popupWindow', `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`);
        }
    },
    mounted() {
        AOS.init()
        this.getProfile()
        utilities.symbolise()

        if (document.querySelector('html').lang == 'ar') {
            if (document.getElementById('original')) {
                document.getElementById('original').dir = 'rtl'
                document.getElementById('original').classList.add('font-arabic')
            }
        } else {
            if (document.getElementById('original')) {

                document.getElementById('original').dir = 'ltr'
                document.getElementById('original').classList.add('font-title')
            }
        }

        setTimeout(() => {
            this.store.togNewsLetter = !this.store.togNewsLetter
        }, 5000);


    }
})


import navbar from './components/navbar/index.js'
app.component('navbar', navbar)

import heroSection from './components/hero-section/index.js'
app.component('hero-section', heroSection)

import servicesSection from './components/services-section/index.js'
app.component('services-section', servicesSection)

import differenceSection from './components/difference-section/index.js'
app.component('difference-section', differenceSection)

import blogsSection from './components/blogs-section/index.js'
app.component('blogs-section', blogsSection)

import bannerSection from './components/banner-section/index.js'
app.component('banner-section', bannerSection)

import servicesBannerSection from './components/services-banner-section/index.js'
app.component('services-banner-section', servicesBannerSection)

import contactSection from './components/contact-section/index.js'
app.component('contact-section', contactSection)

import founderSection from './components/founder/index.js'
app.component('founder-section', founderSection)

import footerSection from './components/footer-section/index.js'
app.component('footer-section', footerSection)


import newsletter from './components/newsletter/index.js'
app.component('newsletter', newsletter)


// BLOGS Components
import spinner from './components/spinner/index.js'
app.component('spinner', spinner)

import pagination from './components/pagination/index.js'
app.component('pagination', pagination)

import blogMedia from './components/blog-media/index.js'
app.component('blog-media', blogMedia)

import blogFooter from './components/blog-footer/index.js'
app.component('blog-footer', blogFooter)

import blogHeader from './components/blog-header/index.js'
app.component('blog-header', blogHeader)

import checkAlso from './components/check-also/index.js'
app.component('check-also', checkAlso)


app.mount('#app')