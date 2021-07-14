"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.extractServiceKeys=void 0;const tsquery_1=require("@phenomnomnominal/tsquery"),typescript_1=require("typescript"),buildKeysFromASTNodes_1=require("./buildKeysFromASTNodes");function extractServiceKeys(e){const r=tsquery_1.tsquery(e,"Constructor Parameter:has(TypeReference Identifier[name=TranslocoService])");let t=[];for(const s of r)if(typescript_1.isParameter(s)){const r=s.name.getText(),o=tsquery_1.tsquery(e,`PropertyAccessExpression:has([name=${r}])`);t=t.concat(buildKeysFromASTNodes_1.buildKeysFromASTNodes(o))}return t}exports.extractServiceKeys=extractServiceKeys;