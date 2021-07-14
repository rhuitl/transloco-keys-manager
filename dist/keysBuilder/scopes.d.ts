export declare function addScope(scope: string, alias: string): void;
export declare function getScopes(): {
  scopeToAlias: {
    [scope: string]: string;
  };
  aliasToScope: {
    [scopeAlias: string]: string;
  };
};
export declare function hasScope(scope: string): boolean;
