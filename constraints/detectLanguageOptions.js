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
    hints: function(value, attributes, attributeName, options, constraints) {
        if (attributes[attributeName]) {
            return {
                isArray: true
            }
        }
    },
    text: function(value, attributes, attributeName, options, constraints) {
        if (attributes[attributeName]) {
            return {
                isString: true
            }
        } else {
            return {
                presence: {
                    message: '^the-text-to-translate-is-required',
                    allowEmpty: false
                }
            }
        }
    }
};
