import { TranslocoConfig } from '@ngneat/transloco-utils';

import { ScopeMap, Config } from '../types';
declare type Params = {
  translationPath: string;
  scopeToKeys: ScopeMap;
  config: Config & TranslocoConfig;
};
/**
 * In use in the Webpack Plugin
 */
export declare function generateKeys({ translationPath, scopeToKeys, config }: Params): void;
export {};
