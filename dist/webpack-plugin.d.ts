import { Config } from './types';
export declare class TranslocoExtractKeysWebpackPlugin {
  config: Config;
  inlineConfig: Config;
  constructor(inlineConfig?: Config);
  apply(compiler: any): void;
}
