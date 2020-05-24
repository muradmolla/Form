import validators from './Validation/validators';

const Validation = function(name, error = '', validationF = function(value){}) {

    let validator = {name: name, error: error, validate: validationF};

    for (let i in validators) {

       if (validators[i].name === name) {
           validator = validators[i];
       }

    }
    console.log(validator);

  return validator;
};
export default Validation;
