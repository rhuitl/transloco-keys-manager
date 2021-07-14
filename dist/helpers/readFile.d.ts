export declare function readFile(file: string): string;
export declare function readFile(
  file: string,
  config: {
    parse: false;
  }
): string;
export declare function readFile(
  file: string,
  config: {
    parse: true;
  }
): object;
