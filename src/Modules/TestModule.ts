import { IModule, IFile, ITransformResult } from "../Interfaces";

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