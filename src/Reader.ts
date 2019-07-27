import { Configurator } from "./Configurator";
import { IFile } from "./Interfaces/IFile";
import * as fs from 'fs';

export class Reader {
    public static readFromFiles(_files: string[]): Array<IFile> {
        var result: Array<IFile> = new Array<IFile>();

        _files.forEach(_fileName => {
            var _fileContent: string = fs.readFileSync(Configurator.BookbinderDir + _fileName, 'utf8');
            var _fileLines: string[] = _fileContent.split(/\r\n/);

            result.push({
                Name: _fileName,
                Content: _fileContent,
                Lines: _fileLines
            });
        });

        return result;
    }
}