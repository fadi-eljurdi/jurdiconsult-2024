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
                '/assets/clients/cts.png',
                '/assets/clients/majid.png',
                '/assets/clients/mbc.png',
                '/assets/clients/netflix.png',
                '/assets/clients/o3.png',
                '/assets/clients/primetarget.png',
                '/assets/clients/sanova.png',
                // '/assets/clients/souhair.png',
                '/assets/clients/telfaz.png',
                '/assets/clients/uturn.png',
                '/assets/clients/vice.png',
                '/assets/clients/webedia.png',
            ]

            return [...arr, ...arr, ...arr, ...arr, ...arr]
        }
    }
}