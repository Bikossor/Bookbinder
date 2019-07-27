import { Scanner } from "./Scanner";
import { Reader } from "./Reader";
import { Configurator } from "./Configurator";
import { Operator } from "./Operator";
import { TestModule } from "./Modules/TestModule";
import { Tokenizer } from "./Tokenizer";

console.log("-= Bookbinder v0.0.0 by Bikossor =-");

console.log("Scanning for files...");
var fileNames: string[] = Scanner.scanDir(Configurator.BookbinderDir, Configurator.BookbinderFileExtension);
console.log(`Found ${fileNames.length} file(s)`);

var files = Reader.readFromFiles(fileNames);
var test = Tokenizer.tokenize(Configurator.TokenRegex, files[0].Content);
var operator = new Operator(files);

operator.registerModules([
	new TestModule
]);

operator.init();

var result = operator.run();