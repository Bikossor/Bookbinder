"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Scanner_1 = require("./Scanner");
const Reader_1 = require("./Reader");
const Configurator_1 = require("./Configurator");
console.log("-= Bookbinder v0.0.0 by Bikossor =-");
console.log("Scanning for files...");
var fileNames = Scanner_1.Scanner.scanDir(Configurator_1.Configurator.BookbinderDir, Configurator_1.Configurator.BookbinderFileExtension);
console.log(`Found ${fileNames.length} file(s)`);
var files = Reader_1.Reader.readFromFiles(fileNames);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va2JpbmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9Cb29rYmluZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQW9DO0FBQ3BDLHFDQUFrQztBQUNsQyxpREFBOEM7QUFHOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0FBRW5ELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNyQyxJQUFJLFNBQVMsR0FBYSxpQkFBTyxDQUFDLE9BQU8sQ0FBQywyQkFBWSxDQUFDLGFBQWEsRUFBRSwyQkFBWSxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDNUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLFNBQVMsQ0FBQyxNQUFNLFVBQVUsQ0FBQyxDQUFDO0FBRWpELElBQUksS0FBSyxHQUFHLGVBQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMifQ==