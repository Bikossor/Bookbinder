import { IFile } from "./Interfaces";
import * as fs from "fs";

export class Writer {
    public static write(files: IFile[]): void {
        files.forEach(file => {
            fs.writeFileSync(
                file.Name.replace(".book", ".md"), //TODO: Make this much prettier and sturdier
                file.Content
            );
        });
    }
}
