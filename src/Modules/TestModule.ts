import { IModule } from "../Interfaces/IModule";
import { IFile } from "../Interfaces/IFile";
import { ITransformResult } from "../Interfaces/ITransformResult";

export class TestModule implements IModule {
    Name = "TestModule";
    Author = "André Lichtenthäler";
    Version = "0.0.0";
    Token = "test";

    public Action(files: Array<IFile>): Array<ITransformResult> {
        var result: Array<ITransformResult> = new Array<ITransformResult>();

        return result;
    }
}