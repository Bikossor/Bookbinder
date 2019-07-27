import { IModule } from "../Interfaces/IModule";
import { IFile } from "../Interfaces/IFile";
import { ITransformResult } from "../Interfaces/ITransformResult";
export declare class TestModule implements IModule {
    Name: string;
    Author: string;
    Version: string;
    Token: string;
    Action(files: Array<IFile>): Array<ITransformResult>;
}
