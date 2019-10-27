import { IFile, ITransformResult } from "./";
export interface IModule {
    readonly Name: string;
    readonly Author: string;
    readonly Version: string;
    readonly Token: string;
    Action(files: Array<IFile>): ITransformResult;
}
