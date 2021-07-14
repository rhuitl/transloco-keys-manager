import { BaseParams } from '../types';
interface AddKeysParams extends BaseParams {
  scopeAlias: string;
  keyWithoutScope: string;
}
export declare function addKey({ defaultValue, scopeToKeys, scopeAlias, keyWithoutScope, scopes }: AddKeysParams): void;
export {};
