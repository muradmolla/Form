import File from './File'

// Needs a lot of work
class Img extends File {

    constructor(options = {
        defaultSrc: '',
    }) {

        super(options);

        this.type = 'img';

        this.src = options.defaultSrc;

    }

    eventHandler(evt) {
        super.eventHandler(evt);

        if (typeof this.value === 'object' && this.value !== null) {
            let src;
            if (this.value.length > 0) {
                src = [];
                Array.from(this.value).forEach(v => src.push(URL.createObjectURL(v)));
            } else
                src = URL.createObjectURL(this.value[0]);
            console.log(src);
            this.src =  src;
        }
    }

}

export default Img;
