var validate = require('validate.js');


validate.validators.isInteger = function(value, options, key, attributes) {

    if (options === true) {
        if (validate.isInteger(value)) {
            return null;
        } else {
            return '^must-be-an-integer';
        }
    } else {
        return null;
    }
}


validate.validators.isString = function(value, options, key, attributes) {

    if (options === true) {
        if (validate.isString(value)) {
            return null;
        } else {
            return '^must-be-a-string';
        }
    } else {
        return null;
    }
}

validate.validators.isArray = function(value, options, key, attributes) {

    if (options === true) {
        if (validate.isArray(value)) {
            return null;
        } else {
            return '^must-be-an-array';
        }
    } else {
        return null;
    }
}

validate.validators.isStringOrArray = function(value, options, key, attributes) {

    if (options === true) {
        if (validate.isString(value) || validate.isArray(value)) {
            return null;
        } else {
            return '^must-be-a-string-or-array';
        }
    } else {
        return null;
    }
}


module.exports = validate;
