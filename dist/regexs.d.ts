export declare const regexs: {
  templateKey: (varName: any) => RegExp;
  directive: () => RegExp;
  directiveTernary: () => RegExp;
  structuralDirectiveTernary: (varName: any) => RegExp;
  pipe: () => RegExp;
  tsCommentsSection: () => RegExp;
  templateCommentsSection: () => RegExp;
  templateValidComment: (marker: any) => RegExp;
  markerValues: (marker: any) => RegExp;
  /** use the translate function directly */
  directImport: RegExp;
};
