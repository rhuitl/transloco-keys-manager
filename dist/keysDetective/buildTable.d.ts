declare type Params = {
  addMissingKeys: boolean;
  emitErrorOnExtraKeys: boolean;
  langs: string[];
  diffsPerLang: {
    [lang: string]: {
      missing: any[];
      extra: any[];
    };
  };
};
export declare function buildTable({ langs, diffsPerLang, addMissingKeys, emitErrorOnExtraKeys }: Params): void;
export {};
