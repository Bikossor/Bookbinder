import { IFile } from "./Interfaces";
import { Configurator } from "./Configurator";
import { TokenMap } from "./TokenMap";

export class Transformer {
    public static transform(files: Array<IFile>): Array<IFile> {
        const result: Array<IFile> = new Array<IFile>();

        files.forEach(file => {
            result.push({
                Name: file.Name,
                Content: file.Content.replace(Configurator.TokenRegex, this.replace),
                Lines: []
            });
        });

        return result;
    }

    private static replace(match: string, token: string) {
        const [tokenName, ...tokenArgs] = token.split("\.");
        return TokenMap[tokenName](tokenArgs);
    }
}
