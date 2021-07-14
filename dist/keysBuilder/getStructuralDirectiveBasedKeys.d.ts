import { TEMPLATE_TYPE } from '../types';
declare type StructuralExtractionResult = {
  translationKeys: string[];
  read: string;
};
/** Get the keys from an ngTemplate/ngContainer */
export declare function getStructuralDirectiveBasedKeys(
  element: any,
  templateType: TEMPLATE_TYPE,
  matchedStr: string
): StructuralExtractionResult;
export {};
