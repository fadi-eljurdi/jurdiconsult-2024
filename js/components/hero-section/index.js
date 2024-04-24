import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/js/components/hero-section/index.html'),
    data() {
        return {
            store,
            utilities,
            wallpaper: true
        }
    },
    computed: {
        location() {
            return {
                pathname: location.pathname,
                href: location.href
            }
        }
    },
    methods: {
        async applyBackground() {
            var files = await utilities.openFiles()
            var image64 = await utilities.file64(files[0])
            document.getElementById('hero').style.backgroundImage = `url(${image64})`;
        }
    }
}
