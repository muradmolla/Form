import Types from './Types'


//Needs work
class File extends Types {
    get bind() {
        return (v => this.eventHandler(v));
    }

    set bind(v) {
    }

    constructor(options = {}) {
        super(null, options);
        this.value = null;
        this.type = 'file';
    }

    eventHandler(evt) {
        console.log(evt);
        this.value = evt.target.files;
    }
}

export default File;
