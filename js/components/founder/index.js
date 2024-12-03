import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/js/components/founder/index.html'),
    data() {
        return {
            store,
            utilities
        }
    },
    computed: {
        getImages() {
            let arr = [
                '/assets/c1.png',
                '/assets/c2.png',
                '/assets/c3.png',
                '/assets/c4.png',
                '/assets/c5.png',
                '/assets/c6.png',
                '/assets/c7.png',
                '/assets/c8.png',
                '/assets/c10.png',
                '/assets/c11.png',
                '/assets/c12.png',
                '/assets/c13.png',
                '/assets/c14.png',
                '/assets/c15.png',
            ]

            return [...arr, ...arr, ...arr, ...arr, ...arr]
        }
    }
}