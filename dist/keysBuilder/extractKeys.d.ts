import { Config, ExtractionResult, ExtractorConfig, ScopeMap } from '../types';
export declare function extractKeys(
  { input, scopes, defaultValue, files }: Config,
  fileType: 'ts' | 'html',
  extractor: (config: ExtractorConfig) => ScopeMap
): ExtractionResult;
