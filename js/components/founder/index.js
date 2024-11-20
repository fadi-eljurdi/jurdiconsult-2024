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
            return new Array(10)
        }
    }
}