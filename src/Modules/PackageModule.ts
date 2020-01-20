import * as path from "path";

export class PackageModule {
    public static run(args?: Array<string>): string {
        const currentDirectory: string = process.cwd();
        const packagePath: string = path.join(currentDirectory, "package.json");
        const currentPackage: Object = require(packagePath);
        const packageProperty: string = args[0];

        if (!packageProperty && !currentPackage.hasOwnProperty(packageProperty)) {
            throw new Error(`Property "${packageProperty}" of "${packagePath}" was not found!`);
        }

        return currentPackage[packageProperty];
    }
}
