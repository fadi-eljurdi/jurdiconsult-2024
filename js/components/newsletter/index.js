import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/js/components/newsletter/index.html'),
    data() {
        return {
            store,
            utilities,
            spinner: false,
            openForm: false,
            formInput: '',
            api: 'https://script.google.com/macros/s/AKfycbwgcxGOQQ36XGCQQi2ncQDG--YG7lZXC5a-CVdAQyS9GlkJQZqBjoGNpZWOLp9GQeQW/exec'
        }
    },
    methods: {
        subscribe() {
            this.spinner = true
            fetch(this.api, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain"
                },
                body: JSON.stringify({
                    email: this.formInput
                })
            }).then(res => res.json()).then(res => {
                console.log(res);
                this.spinner = true
                this.openForm = false
                this.store.togNewsLetter = !this.store.togNewsLetter
                alert('Thanks for Subscribing!')
            }).catch(err => {
                console.log(err);
                this.spinner = true
                this.openForm = false
                this.store.togNewsLetter = !this.store.togNewsLetter
            })
        },
        isValid(){
            return this.formInput.trim() != "" && utilities.validateEmail(this.formInput.trim()) ? true : false
        }
    }

}