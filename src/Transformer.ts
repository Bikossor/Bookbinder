import { IFile } from "./Interfaces";
import { Configurator } from "./Configurator";
import { TokenMap } from "./TokenMap";

export class Transformer {
    public static transform(files: IFile[]): Array<IFile> {
        var result: Array<IFile> = new Array<IFile>();

        files.forEach(file => {
            result.push({
                Name: file.Name,
                Content: file.Content.replace(Configurator.TokenRegex, (match, token) => {
                    return TokenMap[token]();
                }),
                Lines: []
            });
        });

        return result;
    }
}