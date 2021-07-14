import ora from 'ora';
declare function noop(): void;
export declare function getLogger(): {
  log: (...msg: any[]) => void | typeof noop;
  success: (msg: any) => any;
  startSpinner: (msg: any) => ora.Ora | typeof noop;
};
declare type DebugNamespaces = 'config' | 'paths' | 'scopes';
export declare function devlog(namespace: DebugNamespaces, tag: string, values: Record<string, any>): void;
export {};
