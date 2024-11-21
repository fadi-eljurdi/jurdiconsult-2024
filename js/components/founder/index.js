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
    computed:{
        getImages(){
            return [
                '/assets/c1.png',
                '/assets/c2.png',
                '/assets/c3.png',
                '/assets/c4.png',
                '/assets/c5.png',
                '/assets/c6.png',
                '/assets/c7.png',
                '/assets/c8.png',
                '/assets/c9.png',
                '/assets/c10.png',
            ]
        }
    }
}