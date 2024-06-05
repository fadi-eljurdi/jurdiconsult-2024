export default class Blogs {
    constructor(payload = null) {
        var keys = ['id', 'timestamp', 'media', 'title', 'badge', 'keywords', 'description', 'url', 'folder','links','order']
        for (let prop of keys) {
            this[prop] = payload ? payload[prop] : ''
        }
    }
}