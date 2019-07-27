"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
class Scanner {
    /**
     * @param Path Path to be scanned at
     * @param FileExtension FileExtension to be filtered by
     * @returns An array of the file names
     */
    static scanDir(Path, FileExtension) {
        var entries = fs.readdirSync(Path, {
            withFileTypes: true
        });
        var files = entries.filter(_file => {
            return _file.isFile() && path.extname(_file.name) === FileExtension;
        });
        var result = new Array();
        files.forEach(file => {
            result.push(file.name);
        });
        return result;
    }
    ;
}
exports.Scanner = Scanner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Nhbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9TY2FubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUU3QixNQUFhLE9BQU87SUFDbkI7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBWSxFQUFFLGFBQXFCO1FBQ3hELElBQUksT0FBTyxHQUFnQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRTtZQUMvQyxhQUFhLEVBQUUsSUFBSTtTQUNuQixDQUFDLENBQUM7UUFFSCxJQUFJLEtBQUssR0FBZ0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMvQyxPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxhQUFhLENBQUM7UUFDckUsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBRWpDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFBQSxDQUFDO0NBQ0Y7QUF2QkQsMEJBdUJDIn0=