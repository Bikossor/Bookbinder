"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Operator {
    constructor(files) {
        this._files = files;
    }
    init() {
        // var tokenList = RegexHelper.execAll(Configurator.TokenRegex, );
        this._modules.forEach(_module => {
        });
    }
    registerModules(modules) {
        this._modules = modules;
    }
    run() {
        this._modules.forEach(_module => {
            console.log(`Initialized ${_module.Name} v${_module.Version} by ${_module.Author}`);
            var test = _module.Action(this._files);
            console.log(test);
        });
        return new Array();
    }
}
exports.Operator = Operator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3BlcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvT3BlcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFhLFFBQVE7SUFJakIsWUFBWSxLQUFtQjtRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBR00sSUFBSTtRQUNQLGtFQUFrRTtRQUNsRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUVoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxlQUFlLENBQUMsT0FBdUI7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQUVNLEdBQUc7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsT0FBTyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsT0FBTyxPQUFPLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBRXBGLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksS0FBSyxFQUFtQixDQUFDO0lBQ3hDLENBQUM7Q0FDSjtBQTlCRCw0QkE4QkMifQ==