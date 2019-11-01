import { IFile } from "./Interfaces";
import * as fs from 'fs';

export class Reader {
    public static readFromFiles(_files: string[]): Array<IFile> {
        var result: Array<IFile> = new Array<IFile>();

        _files.forEach(_filePath => {
            var _fileContent: string = fs.readFileSync(_filePath, 'utf8');
            var _fileLines: string[] = _fileContent.split(/\r\n/);

            result.push({
                Name: _filePath,
                Content: _fileContent,
                Lines: _fileLines
            });
        });

        return result;
    }
}