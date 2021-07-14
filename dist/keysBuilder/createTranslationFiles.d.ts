import { ScopeMap, Scopes } from '../types';
declare type Params = {
  scopeToKeys: ScopeMap;
  langs: string[];
  outputPath: string;
  replace: boolean;
  scopes: Scopes;
  deleteMissingKeys: boolean;
};
export declare function createTranslationFiles({
  scopeToKeys,
  langs,
  outputPath,
  replace,
  scopes,
  deleteMissingKeys
}: Params): void;
export {};
