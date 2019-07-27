import { IModule } from "./Interfaces/IModule";
import { IFile } from "./Interfaces/IFile";
import { IOperatorResult } from "./Interfaces/IOperatorResult";

export class Operator {
    private _modules: Array<IModule>;
    private _files: Array<IFile>;

    constructor(files: Array<IFile>) {
        this._files = files;
    }

    public init() {
        // var tokenList = RegexHelper.execAll(Configurator.TokenRegex, );
        this._modules.forEach(_module => {

        });
    }

    public registerModules(modules: Array<IModule>) {
        this._modules = modules;
    }

    public run(): Array<IOperatorResult> {
        this._modules.forEach(_module => {
            console.log(`Initialized ${_module.Name} v${_module.Version} by ${_module.Author}`);

            var test = _module.Action(this._files);
            console.log(test);
        });

        return new Array<IOperatorResult>();
    }
}