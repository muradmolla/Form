import Validation from "../Validation";
import Lang from '../Lang/Lang'

//Decipher errors in form
class Types {

    get bind() {
        return this.value;
    }

    set bind(v) {
        this.value = v;
        this.handleSet(v);
    }

    constructor(value, options = {}) {


        //initiate Language controller this should be variable
        this.lang = new Lang('tr');

        //Not complete think more about it.
        this.default = {
                checkXHR: false,
            };

        //initiate validators as validation array (rename this maybe?)
        this.validation = [];


        // Initialize errors array.
        this.errors = [];

        // Set options to default options first
        this.options = this.default;

        //set the custom options
        for(let i in options) {
            this.options[i] = options[i];
        }

        // Set custom validators
        for (let i in this.options.validation) {
            this.validation.push(new Validation(this.options.validation[i]));
        }

        //Then call option array and set new options instead of default. This wont work for validators you cant just override previous validators.
        [].forEach.call(options, v => this.options[v] = options[v]);
    }

    // A Function that validates the value depending on validation array
    validate() {
        // Clear error array
        this.errors = [];

        //iterate through validation array
        for (let i in this.validation) {

            // validation[i].validate(this.value) returns true if value passes validation check. If it returns false push deciphered error into errors array.

            //*** DONT DECIPHER THEM HERE DECIPHER ON FORM CLASS
            if (!this.validation[i].validate(this.value)) this.errors.push(this.lang.decipher(this.validation[i].error));
        }

        // If there is a validation error don't check by XHR
        if (this.errors.length > 0) return;

        // If checkXHR option is passed check with that url.
        if (this.options.checkXHR) this.xhrCheck(this.options.checkXHR);
    }

    option(field, value) {
        this.options[field] = value;
    }

    // A Function which sends XHR request to an url and handles response **UNDER CONSTRUCTION**
    xhrCheck(url) {

    }

    // This function is called whenever value changes
    handleSet(v) {

        // Set internal value to passed value.
        this.value = v;

        // Validate the value
        this.validate();


    }
}

export default Types;
