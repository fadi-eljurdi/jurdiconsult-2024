import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/js/components/blogs-section/index.html'),
    data() {
        return {
            store,
            utilities,
            path: new URL(location.href).pathname
        }
    },
    computed: {
        filteredBlogs() {
            if (this.store.spinner) {
                return new Array(12)
            }

            if (this.path == '/blogs/') return this.store.blogs.filter(node => node.badge.trim().toUpperCase() != 'DEMO')
            return this.store.blogs.filter(node => node.badge.trim().toUpperCase() != 'DEMO').slice(-8).reverse()
        }
    },
    methods: {
        slideNext() {
            const swiperEl = document.querySelector('#b-swiper');
            // console.log(swiperEl.swiper);
            swiperEl.swiper.slideNext();
        },
        slideBack() {
            const swiperEl = document.querySelector('#b-swiper');
            // console.log(swiperEl.swiper);
            swiperEl.swiper.slidePrev();
        },
    }
}