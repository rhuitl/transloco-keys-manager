"use strict";function resolveAliasAndKey(e,s){const[o,...l]=e.split("."),r=s.aliasToScope.hasOwnProperty(o);return[r?l.join("."):e,r?o:null]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.resolveAliasAndKey=void 0,exports.resolveAliasAndKey=resolveAliasAndKey;