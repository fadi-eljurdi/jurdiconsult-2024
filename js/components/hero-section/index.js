import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/js/components/hero-section/index.html'),
    data() {
        return {
            store,
            utilities,
        }
    },
    methods: {
        async applyBackground() {
            var files = await utilities.openFiles()
            var image64 = await utilities.file64(files[0])
            document.getElementById('hero').style.backgroundImage = `url(${image64})`;
            document.getElementById('hero').style.backgroundRepeat = `no-repeat`;
            document.getElementById('hero').style.backgroundSize = `cover`;
            document.getElementById('hero').style.backgroundPosition = `center`;
        },
        sharePageUrl(){
            utilities.shareBy(location.hostname,location.href)
        }
    }
}
