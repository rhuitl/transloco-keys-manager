export declare type Config = {
  input?: string[];
  config?: string;
  project?: string;
  translationsPath?: string;
  langs?: string[];
  defaultValue?: undefined | string;
  replace?: boolean;
  addMissingKeys?: boolean;
  deleteMissingKeys?: boolean;
  emitErrorOnExtraKeys?: boolean;
  scopes?: Scopes;
  scopePathMap?: {
    [scopeAlias: string]: string;
  };
  files?: string[];
  output?: string;
  marker?: string;
  sort?: boolean;
  unflat?: boolean;
  command?: 'extract' | 'find';
};
export declare type ExtractionResult = {
  scopeToKeys: ScopeMap;
  fileCount?: number;
};
export declare type ExtractorConfig = {
  file: string;
  scopes: Scopes;
  defaultValue: string;
  scopeToKeys: ScopeMap;
};
export declare type Scopes = {
  scopeToAlias: {
    [scope: string]: string;
  };
  aliasToScope: {
    [scopeAlias: string]: string;
  };
};
export declare type ScopeMap = {
  __global: object;
  [scopePath: string]: object;
};
export declare enum TEMPLATE_TYPE {
  STRUCTURAL = 0,
  NG_TEMPLATE = 1
}
export declare type BaseParams = {
  defaultValue: string;
  scopeToKeys: ScopeMap;
  scopes: Scopes;
};
