import Types from './Types'


//Needs work
class Text extends Types {
    constructor(value, options = {}) {
        super(value, options);
        this.value = value || '';
    }
}

export default Text;
