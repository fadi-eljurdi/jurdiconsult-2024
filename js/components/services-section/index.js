import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/js/components/services-section/index.html'),
    data() {
        return {
            store,
            utilities,
        }
    },
    computed: {
        filteredServices() {
            return this.store.spinner ? new Array(10) : this.store.services.filter(node => node.badge.trim().toUpperCase() != 'DEMO')
        }
    },
    methods: {
        slideNext() {
            const swiperEl = document.querySelector('#s-swiper');
            // console.log(swiperEl.swiper);
            swiperEl.swiper.slideNext();
        },
        slideBack() {
            const swiperEl = document.querySelector('#s-swiper');
            // console.log(swiperEl.swiper);
            swiperEl.swiper.slidePrev();
        },
    }
}