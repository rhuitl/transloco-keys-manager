export declare const optionDefinitions: (
  | {
      name: string;
      type: StringConstructor;
      description: string;
      alias?: undefined;
      multiple?: undefined;
    }
  | {
      name: string;
      alias: string;
      type: StringConstructor;
      description: string;
      multiple?: undefined;
    }
  | {
      name: string;
      alias: string;
      type: StringConstructor;
      multiple: boolean;
      description: string;
    }
  | {
      name: string;
      alias: string;
      type: BooleanConstructor;
      description: string;
      multiple?: undefined;
    }
)[];
export declare const sections: (
  | {
      header: string;
      content: string;
      optionList?: undefined;
    }
  | {
      header: string;
      content: string[];
      optionList?: undefined;
    }
  | {
      header: string;
      optionList: (
        | {
            name: string;
            type: StringConstructor;
            description: string;
            alias?: undefined;
            multiple?: undefined;
          }
        | {
            name: string;
            alias: string;
            type: StringConstructor;
            description: string;
            multiple?: undefined;
          }
        | {
            name: string;
            alias: string;
            type: StringConstructor;
            multiple: boolean;
            description: string;
          }
        | {
            name: string;
            alias: string;
            type: BooleanConstructor;
            description: string;
            multiple?: undefined;
          }
      )[];
      content?: undefined;
    }
)[];
