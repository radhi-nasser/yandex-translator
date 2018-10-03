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
    ui: function(value, attributes, attributeName, options, constraints) {
        if (attributes[attributeName]) {
            return {
                isString: true
            }
        }
    }
};
