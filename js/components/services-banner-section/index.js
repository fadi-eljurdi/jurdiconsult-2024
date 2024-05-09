import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/js/components/services-banner-section/index.html'),
    data() {
        return {
            store,
            utilities
        }
    },
    
    computed: {
        filteredServices() {
            return this.store.spinner ? ['','','','','','','','','',''] : this.store.services.filter(node => node.badge.trim().toUpperCase() != 'DEMO')
            // return this.store.services.filter(s => s.badge != 'DEMO')
            // return this.store.services
        }
    }
}