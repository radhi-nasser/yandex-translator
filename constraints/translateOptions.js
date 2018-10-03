exports.constraints = {
    apiKey: function(value, attributes, attributeName, options, constraints) {
        if (attributes[attributeName]) {
            return {
                isString: true
            }
        }
    },
    resultFormat: function(value, attributes, attributeName, options, constraints) {
        if (attributes[attributeName]) {
            return {
                isString: true,
                inclusion: {
                    within: ['json', 'xml'],
                    message: '^only-json-or-xml-values-are-allowed'
                }
            }
        }
    },
    format: function(value, attributes, attributeName, options, constraints) {
        if (attributes[attributeName]) {
            return {
                isString: true,
                inclusion: {
                    within: ['plain', 'html'],
                    message: '^only-plain-or-html-values-are-allowed'
                }
            }
        }
    },
    from: function(value, attributes, attributeName, options, constraints) {
        if (attributes[attributeName]) {
            return {
                isString: true
            }
        }
    },
    to: function(value, attributes, attributeName, options, constraints) {
        if (attributes[attributeName]) {
            return {
                isString: true
            }
        } else {
            return {
                presence: {
                    message: '^the-to-language-is-required',
                    allowEmpty: false
                }
            }
        }
    },
    text: function(value, attributes, attributeName, options, constraints) {
        if (attributes[attributeName]) {
            return {
                isStringOrArray: true
            }
        } else {
            return {
                presence: {
                    message: '^the-text-to-translate-is-required',
                    allowEmpty: false
                }
            }
        }
    },
    options: function(value, attributes, attributeName, options, constraints) {
        if (attributes[attributeName]) {
            return {
                isInteger: true,
                inclusion: {
                    within: [0, 1],
                    message: '^only-0-or-1-values-are-allowed'
                }
            }
        }
    }
};
