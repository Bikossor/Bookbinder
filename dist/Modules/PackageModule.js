"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
class PackageModule {
    static run(args) {
        const currentDirectory = process.cwd();
        const packagePath = path.join(currentDirectory, "package.json");
        const currentPackage = require(packagePath);
        const packageProperty = args[0];
        if (!packageProperty && !currentPackage.hasOwnProperty(packageProperty)) {
            throw new Error(`Property "${packageProperty}" of "${packagePath}" was not found!`);
        }
        return currentPackage[packageProperty];
    }
}
exports.PackageModule = PackageModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFja2FnZU1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Nb2R1bGVzL1BhY2thZ2VNb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBNkI7QUFFN0IsTUFBYSxhQUFhO0lBQ2YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFvQjtRQUNsQyxNQUFNLGdCQUFnQixHQUFXLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMvQyxNQUFNLFdBQVcsR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sY0FBYyxHQUFXLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwRCxNQUFNLGVBQWUsR0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDckUsTUFBTSxJQUFJLEtBQUssQ0FBQyxhQUFhLGVBQWUsU0FBUyxXQUFXLGtCQUFrQixDQUFDLENBQUM7U0FDdkY7UUFFRCxPQUFPLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0o7QUFiRCxzQ0FhQyJ9