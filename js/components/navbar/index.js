import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/js/components/navbar/index.html'),
    data() {
        return {
            store,
            // utilities
        }
    },
    methods: {
        getActiveClass(name) {
            
            if (location.pathname == name) {
                // console.log(location.pathname);
                return "navbar-link-active"
            }

            return 'navbar-link'
        }
    }
}