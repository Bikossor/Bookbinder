import { Scanner } from "./Scanner";
import { Reader } from "./Reader";
import { Configurator } from "./Configurator";
import { TestModule } from "./Modules/TestModule";

console.log("-= Bookbinder v0.0.0 by Bikossor =-");

console.log("Scanning for files...");
var fileNames: string[] = Scanner.scanDir(Configurator.BookbinderDir, Configurator.BookbinderFileExtension);
console.log(`Found ${fileNames.length} file(s)`);

var files = Reader.readFromFiles(fileNames);