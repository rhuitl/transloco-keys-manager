"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.deleteMissingKeys=void 0;const isObject_1=require("./isObject");function deleteMissingKeys(e,s){if(isObject_1.isObject(e)&&isObject_1.isObject(s))for(const i in e)s[i]||delete e[i],isObject_1.isObject(e[i])&&deleteMissingKeys(e[i],s[i])}exports.deleteMissingKeys=deleteMissingKeys;