import { BaseParams } from '../types';
interface ExtractCommentsParams extends BaseParams {
  content: string;
  regex: () => RegExp;
  read?: string;
}
export declare function extractCommentsValues({
  content,
  regex: regexConstructor,
  read,
  ...baseParams
}: ExtractCommentsParams): void;
export {};
