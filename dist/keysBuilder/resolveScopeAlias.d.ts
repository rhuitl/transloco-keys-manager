import { Scopes } from '../types';
declare type Params = {
  scopePath: string;
  scopes: Scopes;
};
/**
 *
 * Resolve the scope alias
 *
 * @example
 *
 *  scopePath: 'some/nested' => someNested
 *  scopePath: 'some/nested/en' => someNested
 *
 */
export declare function resolveScopeAlias({ scopePath, scopes }: Params): string;
export {};
