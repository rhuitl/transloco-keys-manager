export declare type FileAction = {
  path: string;
  type: 'new' | 'modified';
};
export declare function buildTranslationFile(
  path: string,
  translation?: {},
  replace?: boolean,
  deleteMissing?: boolean
): FileAction;
