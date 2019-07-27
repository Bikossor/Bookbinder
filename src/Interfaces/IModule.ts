import { IFile } from "./IFile";
import { ITransformResult } from "./ITransformResult";

export interface IModule {
    readonly Name: string;
    readonly Author: string;
    readonly Version: string;
    readonly Token: string;
    Action(files: Array<IFile>): ITransformResult;
}