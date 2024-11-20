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
    }
}