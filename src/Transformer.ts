import { IFile } from "./Interfaces/IFile";
import { Configurator } from "./Configurator";

export class Transformer {
    public static transform(files: IFile[]): Array<IFile> {
        var result: Array<IFile> = new Array<IFile>();

        var tokenMap = {
            "time": () => new Date().toTimeString(),
            "date": () => new Date().toDateString()
        };

        files.forEach(file => {
            result.push({
                Name: file.Name,
                Content: file.Content.replace(Configurator.TokenRegex, (match, token) => {
                    return tokenMap[token]();
                }),
                Lines: []
            });
        });

        return result;
    }
}