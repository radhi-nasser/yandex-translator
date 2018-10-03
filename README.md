yandex-translator
================

## Introduction

[yandex-translator](https://github.com/radhinasser/yandex-translator) is a a promise based implementation of [Yandex Translate API](https://tech.yandex.com/translate/) for node.js

## API key

To start using [Yandex Translate API](https://tech.yandex.com/translate/) we need to get an API key first, which we will get it from the [API key request form](https://translate.yandex.com/developers/keys) after having created an account the [registration page](https://passport.yandex.com/registration).

## Installation

```
npm install yandex-translator --save
```

## Getting started

Import the [yandex-translator](https://github.com/radhinasser/yandex-translator) package with with the API key obtained from the [API key request form](https://translate.yandex.com/developers/keys).

```js
const yandexTranslator = require('yandex-translator')(apiKey);
```

## Functions

#### yandexTranslator.getAvailableLanguages([parameters])

Get the languages that [yandex-translator](https://github.com/radhinasser/yandex-translator) support their translation:

```js
yandexTranslator.getAvailableLanguages().then(
    (result) => {
        console.log(result);
    },
    (error) => {
        console.log(error);
    }
);
```

The *parameters* parameter is an object which can contain any of the following attributes:

|Attribute | Type | Description |Default value |
| ------------ | ------------ |------------ | ------------ |
|[ui] | string | The returned language names are output in the language corresponding to the code in this parameter. The supported language codes are shown in the list of [supported languages](https://tech.yandex.com/translate/doc/dg/concepts/api-overview-docpage/#api-overview__languages). |  |
|[resultFormat] | string | The result format which can be either JSON or XML. | JSON |
|[apiKey] | string | Another API key to run only this request with |The same value as the initialized API key.

#### yandexTranslator.detectLanguage(parameters)

Detect a text language:

```js
yandexTranslator.detectLanguage({text: 'Bonjour'}).then(
    (result) => {
        console.log(result);
    },
    (error) => {
        console.log(error);
    }
);
```

The *parameters* parameter is an object which can contain any of the following attributes:

|Attribute | Type | Description |Default value |
| ------------ | ------------ |------------ | ------------ |
|text* | string | The text that we want to detect it's language. |  |
|[hints] | array | An array of the most likely languages (they will be given preference when detecting the text language). | [] |
|[resultFormat] | string | The result format which can be either JSON or XML. | JSON |
|[apiKey] | string | Another API key to run only this request with |The same value as the initialized API key.

#### yandexTranslator.detectLanguage(parameters)

Translate a text:

```js
yandexTranslator.translate({text: 'Bonjour', to: 'en'}).then(
    (result) => {
        console.log(result);
    },
    (error) => {
        console.log(error);
    }
);
```

The *parameters* parameter is an object which can contain any of the following attributes:

|Attribute | Type | Description |Default value |
| ------------ | ------------ |------------ | ------------ |
|text* | string | The text that we want to detect it's language. |  |
|to* | string | The language which the text will be translated to. |  |
|[from] | string | The source language of the text. If it's then the service will try to detect the source language automatically. |  |
|[options] | integer | Whether the response should include the automatically detected language of the text being translated: 1 to include the automatically detected language of the text, 0 to not | 1 |
|[format] | string | The text format which can be plain (Text without markup) or html (Text in HTML format). | plain |
|[hints] | array | An array of the most likely languages (they will be given preference when detecting the text language). | [] |
|[resultFormat] | string | The result format which can be either JSON or XML. | JSON |
|[apiKey] | string | Another API key to run only this request with |The same value as the initialized API key.


## Task Lists

- [ ] Add CLI support
- [ ] Add browser integration
- [ ] Create tests


## License
MIT.
