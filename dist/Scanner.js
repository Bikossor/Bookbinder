"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
class Scanner {
    /**
     * @param Path Path to be scanned at
     * @param FileExtension FileExtension to be filtered by
     * @returns An array of the absolute paths
     */
    static scanDir(Path, FileExtension) {
        const result = new Array();
        if (!fs.existsSync(Path)) {
            return result;
        }
        const entries = fs.readdirSync(Path, {
            withFileTypes: true
        });
        const files = entries.filter(_file => {
            return _file.isFile() && path.extname(_file.name) === FileExtension;
        });
        files.forEach(file => {
            result.push(path.join(Path, file.name));
        });
        return result;
    }
    ;
}
exports.Scanner = Scanner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Nhbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9TY2FubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUU3QixNQUFhLE9BQU87SUFDbkI7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBWSxFQUFFLGFBQXFCO1FBQ3hELE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFFbkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekIsT0FBTyxNQUFNLENBQUM7U0FDZDtRQUVELE1BQU0sT0FBTyxHQUFnQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRTtZQUNqRCxhQUFhLEVBQUUsSUFBSTtTQUNuQixDQUFDLENBQUM7UUFFSCxNQUFNLEtBQUssR0FBZ0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqRCxPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxhQUFhLENBQUM7UUFDckUsQ0FBQyxDQUFDLENBQUM7UUFFSCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUMxQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFBQSxDQUFDO0NBQ0Y7QUE3QkQsMEJBNkJDIn0=