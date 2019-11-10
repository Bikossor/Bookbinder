import { Scanner } from "./Scanner";
import { Reader } from "./Reader";
import { Configurator } from "./Configurator";
import { Transformer } from "./Transformer";
import { Writer } from "./Writer";
const bookbinderPckg = require("../package.json");

const currentDirectory = process.cwd();

console.log(`-= Bookbinder ${bookbinderPckg.version} by Bikossor =-`);

console.log("Scanning for files...");
const filePaths: string[] = Scanner.scanDir(currentDirectory, Configurator.BookbinderFileExtension);
console.log(`Found ${filePaths.length} file(s)`);

console.log("Reading files...");
const files = Reader.readFromFiles(filePaths);

console.log("Transforming files...");
const transformedFiles = Transformer.transform(files);

console.log("Writing files...");
Writer.write(transformedFiles);

console.log("Done!");
