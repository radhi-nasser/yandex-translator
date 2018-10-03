// libs
const request = require('request');
const validate = require('./extendedValidator');

// constraints
const getAvailableLanguagesOptions = require('./constraints/getAvailableLanguagesOptions');
const detectLanguageOptions = require('./constraints/detectLanguageOptions');
const translateOptions = require('./constraints/translateOptions');

// global (not exported) variables
const xmlApiUrl = 'https://translate.yandex.net/api/v1.5/tr/';
const jsonApiUrl = 'https://translate.yandex.net/api/v1.5/tr.json/';
const getAvailableLanguagesMethodName = 'getLangs';
const detectLanguageMethodName = 'detect';
const translateMethodName = 'translate';

// not exported methodes
function requestYandexApi(url) {

    return new Promise(function(resolve, reject) {

        request.post(url, (error, result, body) => {

            if (error) {
                reject(error);
                return;
            }

            resolve(body);
        });
    });
}

function mergeProperties(options, defaultOptions) {

    for (property in defaultOptions)
        if (!options.hasOwnProperty(property))
            options[property] = defaultOptions[property];

    return options;
}

// exported methodes
module.exports = function(apiKey) {

    var module = {};

    module.getAvailableLanguages = function getLanguages(options = {}) {

        return new Promise(function(resolve, reject) {

            var validationResult = validate(options, getAvailableLanguagesOptions.constraints);
            if (validationResult !== undefined) {
                reject(validationResult);
                return;
            }

            let defaultOptions = {
                apiKey: apiKey,
                resultFormat: 'json',
                ui: ''
            }

            options = mergeProperties(options, defaultOptions);

            let url = (options.resultFormat === 'json') ? jsonApiUrl : xmlApiUrl;
            url += getAvailableLanguagesMethodName;
            url += '?key=' + options.apiKey;
            url += (options.ui !== '') ? ('&ui=' + encodeURIComponent(options.ui)) : '';

            requestYandexApi(url).then(
                (result) => resolve(result),
                (error) => reject(error)
            );
        });
    }

    module.detectLanguage = function detect(options = {}) {

        return new Promise(function(resolve, reject) {

            var validationResult = validate(options, detectLanguageOptions.constraints);
            if (validationResult !== undefined) {
                reject(validationResult);
                return;
            }

            let defaultOptions = {
                apiKey: apiKey,
                resultFormat: 'json',
                hints: '',
                text: ''
            }

            options = mergeProperties(options, defaultOptions);

            let url = (options.resultFormat === 'json') ? jsonApiUrl : xmlApiUrl;
            url += detectLanguageMethodName;
            url += '?key=' + options.apiKey;
            url += '&text=' + encodeURIComponent(options.text);
            url += (options.hints !== '') ? ('&hints=' + options.hints) : '';

            requestYandexApi(url).then(
                (result) => resolve(result),
                (error) => reject(error)
            );
        });
    }

    module.translate = function translate(options = {}) {

        return new Promise(function(resolve, reject) {

            var validationResult = validate(options, translateOptions.constraints);
            if (validationResult !== undefined) {
                return reject(validationResult);
            }

            let defaultOptions = {
                apiKey: apiKey,
                resultFormat: 'json',
                from: '',
                to: '',
                format: 'plain',
                text: '',
                options: 1
            }

            options = mergeProperties(options, defaultOptions);

            let url = (options.resultFormat === 'json') ? jsonApiUrl : xmlApiUrl;
            url += translateMethodName;
            url += '?key=' + options.apiKey;

            if (validate.isString(options.text)) {
                url += '&text=' + encodeURIComponent(options.text);
            } else {

                for (var i in options.text)
                    options.text[i] = encodeURIComponent(options.text[i]);

                url += '&text=' + options.text.join('&text=');
            }

            url += '&format=' + options.format;
            url += '&options=' + options.options;
            url += (options.from !== '') ? ('&lang=' + options.from + '-' + options.to) : ('&lang=' +
                options.to);

            requestYandexApi(url).then(
                (result) => resolve(result),
                (error) => reject(error)
            );
        });
    }

    return module;
}
