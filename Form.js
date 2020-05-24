
import File from './Types/File'
import Img from './Types/Img'
import Text from './Types/Text'
import Types from './Types/Types'

// *TO-DO*
// *Use dynamic importing over Lang directory for Lang
// *Handle the options properly ffs
// *XHRCheck()
// *Migrate Lang class from types to form
// *Validation class

/*
To use properly use bind variable of the input types. Ex:

var form = new Form {
text: '',
img: new Form.$types.img({validation: ['Max-MB|2','img']}),
}

<input type='file' onchange='this.form.img.bind'>
<input type='text' value='this.form.text.bind'> // This need to be adjusted for two way binding. :value='this.form.text.bind' for vue.

 */

Form.$default.language = '';
Form.$default.activeSubmit = false;

class Form {
    $data;
    $language;
    static $default;

    constructor(data, options = {}) {


        // Raw info is stored on this.$data variable
        this.$data = {};

        // Options
        this.$language = options.language || Form.$default.language;
        this.$activeSubmit = options.activeSubmit || Form.$default.activeSubmit;

        // iterate over constructor data
        for (let field in data) {

            // field name cannot start with '$' because of the structure of the Form class
            if (data[field].charAt(0) === '$') throw "Properties starting with '$' are reserved for the class.";

            this.$addField(field, data[field]);

        }
    }

    $errors(field = null) {
        if (field === null) {

        }
        return this[field].errors;
    }

    $addField(field, value) {

        // Check if using primitive types or Object types.
        if (typeof value === 'object' && value !== null) {


            if (Array.isArray(value)) return;

            // Assign the object type directly to class properties and also store in data property
            this[field] = this.$data[field] = value;

        } else {

            // if primitive,  store in data property as correct format but assign class property as raw value because of the data binding.
            this[field] = this.$data[field] = new Types(value);
        }
    }

    $deleteField (field){

        delete this.$data[field];
        delete this[field];

    }

    //fetchData() returns every Form variable as an Object. File types returns FileList type. Every value returned is submittable.
    $fetchData() {
        let data = {};

        for (let key in this.$data) {

            data[key] = this.$data[key].value;
        }

        return data;

    }

    $get(url) {

    }

    $post(url) {

    }

    $delete(url) {

    }

    $update(url) {

    }

}

//Defining usable types
Form.$types = {
    file: File,
    img: Img,
    text: Text,
};


export default Form;
