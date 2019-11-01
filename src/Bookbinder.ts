import { Scanner } from "./Scanner";
import { Reader } from "./Reader";
import { Configurator } from "./Configurator";
import { TestModule } from "./Modules/TestModule";
import { Transformer } from "./Transformer";
import { Writer } from "./Writer";

var currentDirectory = process.cwd();

console.log("-= Bookbinder v0.0.0 by Bikossor =-");

console.log("Scanning for files...");
var filePaths: string[] = Scanner.scanDir(currentDirectory, Configurator.BookbinderFileExtension);
console.log(`Found ${filePaths.length} file(s)`);

console.log("Reading files...");
var files = Reader.readFromFiles(filePaths);

console.log("Transforming files...");
var transformedFiles = Transformer.transform(files);

console.log("Writing files...");
Writer.write(transformedFiles);

console.log("Done!");