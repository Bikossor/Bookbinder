"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Configurator_1 = require("./Configurator");
const fs = require("fs");
class Reader {
    static readFromFiles(_files) {
        var result = new Array();
        _files.forEach(_fileName => {
            var _fileContent = fs.readFileSync(Configurator_1.Configurator.BookbinderDir + _fileName, 'utf8');
            var _fileLines = _fileContent.split(/\r\n/);
            result.push({
                Name: _fileName,
                Content: _fileContent,
                Lines: _fileLines
            });
        });
        return result;
    }
}
exports.Reader = Reader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1JlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUE4QztBQUU5Qyx5QkFBeUI7QUFFekIsTUFBYSxNQUFNO0lBQ1IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFnQjtRQUN4QyxJQUFJLE1BQU0sR0FBaUIsSUFBSSxLQUFLLEVBQVMsQ0FBQztRQUU5QyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksWUFBWSxHQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUMsMkJBQVksQ0FBQyxhQUFhLEdBQUcsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzNGLElBQUksVUFBVSxHQUFhLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFdEQsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDUixJQUFJLEVBQUUsU0FBUztnQkFDZixPQUFPLEVBQUUsWUFBWTtnQkFDckIsS0FBSyxFQUFFLFVBQVU7YUFDcEIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0NBQ0o7QUFqQkQsd0JBaUJDIn0=