"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Scanner_1 = require("./Scanner");
const Reader_1 = require("./Reader");
const Configurator_1 = require("./Configurator");
const Operator_1 = require("./Operator");
const TestModule_1 = require("./Modules/TestModule");
const Tokenizer_1 = require("./Tokenizer");
console.log("-= Bookbinder v0.0.0 by Bikossor =-");
console.log("Scanning for files...");
var fileNames = Scanner_1.Scanner.scanDir(Configurator_1.Configurator.BookbinderDir, Configurator_1.Configurator.BookbinderFileExtension);
console.log(`Found ${fileNames.length} file(s)`);
var files = Reader_1.Reader.readFromFiles(fileNames);
var test = Tokenizer_1.Tokenizer.tokenize(Configurator_1.Configurator.TokenRegex, files[0].Content);
debugger;
var operator = new Operator_1.Operator(files);
operator.registerModules([
    new TestModule_1.TestModule
]);
operator.init();
debugger;
var result = operator.run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va2JpbmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9Cb29rYmluZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQW9DO0FBQ3BDLHFDQUFrQztBQUNsQyxpREFBOEM7QUFDOUMseUNBQXNDO0FBQ3RDLHFEQUFrRDtBQUNsRCwyQ0FBd0M7QUFFeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0FBRW5ELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNyQyxJQUFJLFNBQVMsR0FBYSxpQkFBTyxDQUFDLE9BQU8sQ0FBQywyQkFBWSxDQUFDLGFBQWEsRUFBRSwyQkFBWSxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDNUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLFNBQVMsQ0FBQyxNQUFNLFVBQVUsQ0FBQyxDQUFDO0FBRWpELElBQUksS0FBSyxHQUFHLGVBQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFNUMsSUFBSSxJQUFJLEdBQUcscUJBQVMsQ0FBQyxRQUFRLENBQUMsMkJBQVksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRXpFLFFBQVEsQ0FBQztBQUVULElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVuQyxRQUFRLENBQUMsZUFBZSxDQUFDO0lBQ3hCLElBQUksdUJBQVU7Q0FDZCxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFFaEIsUUFBUSxDQUFDO0FBRVQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDIn0=