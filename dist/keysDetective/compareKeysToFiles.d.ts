import { ScopeMap } from '../types';
declare type Params = {
  scopeToKeys: ScopeMap;
  translationPath: string;
  addMissingKeys: boolean;
  emitErrorOnExtraKeys: boolean;
};
export declare function compareKeysToFiles({
  scopeToKeys,
  translationPath,
  addMissingKeys,
  emitErrorOnExtraKeys
}: Params): void;
export {};
