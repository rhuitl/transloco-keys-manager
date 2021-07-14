import { Scopes } from '../types';
export declare type ScopeFiles = {
  path: string;
  scope: string;
}[];
export declare function buildScopeFilePaths({
  aliasToScope,
  outputPath,
  langs
}: {
  aliasToScope: Scopes['aliasToScope'];
  outputPath: string;
  langs: string[];
}): ScopeFiles;
