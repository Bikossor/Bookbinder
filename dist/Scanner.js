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
        var result = new Array();
        if (!fs.existsSync(Path)) {
            return result;
        }
        var entries = fs.readdirSync(Path, {
            withFileTypes: true
        });
        var files = entries.filter(_file => {
            return _file.isFile() && path.extname(_file.name) === FileExtension;
        });
        files.forEach(file => {
            result.push(file.name);
        });
        return result;
    }
    ;
}
exports.Scanner = Scanner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Nhbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9TY2FubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUU3QixNQUFhLE9BQU87SUFDbkI7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBWSxFQUFFLGFBQXFCO1FBQ3hELElBQUksTUFBTSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFFakMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekIsT0FBTyxNQUFNLENBQUM7U0FDZDtRQUVELElBQUksT0FBTyxHQUFnQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRTtZQUMvQyxhQUFhLEVBQUUsSUFBSTtTQUNuQixDQUFDLENBQUM7UUFFSCxJQUFJLEtBQUssR0FBZ0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMvQyxPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxhQUFhLENBQUM7UUFDckUsQ0FBQyxDQUFDLENBQUM7UUFFSCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDO0lBQUEsQ0FBQztDQUNGO0FBM0JELDBCQTJCQyJ9