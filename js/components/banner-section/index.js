import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/js/components/banner-section/index.html'),
    data() {
        return {
            store,
            utilities
        }
    }
}