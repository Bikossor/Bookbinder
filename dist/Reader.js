"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Reader {
    static readFromFiles(_files) {
        const result = new Array();
        _files.forEach(_filePath => {
            const _fileContent = fs.readFileSync(_filePath, "utf8");
            const _fileLines = _fileContent.split(/\r\n/);
            result.push({
                Name: _filePath,
                Content: _fileContent,
                Lines: _fileLines,
            });
        });
        return result;
    }
}
exports.Reader = Reader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1JlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlCQUF5QjtBQUV6QixNQUFhLE1BQU07SUFDUixNQUFNLENBQUMsYUFBYSxDQUFDLE1BQWdCO1FBQ3hDLE1BQU0sTUFBTSxHQUFpQixJQUFJLEtBQUssRUFBUyxDQUFDO1FBRWhELE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdkIsTUFBTSxZQUFZLEdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDaEUsTUFBTSxVQUFVLEdBQWEsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV4RCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNSLElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRSxZQUFZO2dCQUNyQixLQUFLLEVBQUUsVUFBVTthQUNwQixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FDSjtBQWpCRCx3QkFpQkMifQ==