import { IModule, IFile, ITransformResult } from "../Interfaces";
export declare class TestModule implements IModule {
    Name: string;
    Author: string;
    Version: string;
    Token: string;
    Action(files: Array<IFile>): Array<ITransformResult>;
}
