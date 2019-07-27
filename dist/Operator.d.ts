import { IModule } from "./Interfaces/IModule";
import { IFile } from "./Interfaces/IFile";
import { IOperatorResult } from "./Interfaces/IOperatorResult";
export declare class Operator {
    private _modules;
    private _files;
    constructor(files: Array<IFile>);
    init(): void;
    registerModules(modules: Array<IModule>): void;
    run(): Array<IOperatorResult>;
}
