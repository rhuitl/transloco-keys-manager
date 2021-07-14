import { ProjectType } from '../defaultConfig';
declare type ProjectBasePath = {
  projectBasePath: string;
  projectType: ProjectType;
};
export declare function resolveProjectBasePath(projectName?: string): ProjectBasePath;
export {};
