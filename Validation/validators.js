
// Predetermined validators.
// {name: 'Some validation name', validate: function(value) {A function returns true for validation pass and false for fail. Change this.error to give validation error.}
const validators = [
    {
        name: 'email',
        validate: function(value) {
            if (typeof value != 'string') {
                this.error = 'mail.string';
                return false;
            }
            if (value.length < 5) { this.error = 'mail.invalid'; return false;}
            let char = '@';
            for (let i = 0; i < value.length; i++) {
                if (value.charAt(i) === char && char === '@') char = '.';
                if (value.charAt(i) === char && char === '.') return true;
            }
            return false;

        }
    },
    {
        name: 'required',
        error: 'required',
        validate: function(value) {
            if (value === null) return false;
            return !((Array.isArray(value) || typeof value === 'string') && !(value.length > 0));

        },
    }
];


export default validators;
