"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.extractPureKeys=void 0;const tsquery_1=require("@phenomnomnominal/tsquery"),buildKeysFromASTNodes_1=require("./buildKeysFromASTNodes");function extractPureKeys(e){const r=tsquery_1.tsquery(e,"CallExpression Identifier[text=translate]");return buildKeysFromASTNodes_1.buildKeysFromASTNodes(r)}exports.extractPureKeys=extractPureKeys;