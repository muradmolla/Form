import tr from './tr'

class Lang {

    constructor(lang) {
        this.lang = lang;

        // Use iteration and dynamic requiring over Lang directory instead of this.
        this.langs = {
            tr: tr,

        }
    }

    decipher(slug, lang = null) {
        let trueLang = lang || this.lang;
        return this.langs[trueLang][slug] || slug;
    }
}

export default Lang;
