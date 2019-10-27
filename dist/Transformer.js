"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Configurator_1 = require("./Configurator");
class Transformer {
    static transform(files) {
        var result = new Array();
        var tokenMap = {
            "time": () => new Date().toTimeString(),
            "date": () => new Date().toDateString()
        };
        files.forEach(file => {
            result.push({
                Name: file.Name,
                Content: file.Content.replace(Configurator_1.Configurator.TokenRegex, (match, token) => {
                    return tokenMap[token]();
                }),
                Lines: []
            });
        });
        return result;
    }
}
exports.Transformer = Transformer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNmb3JtZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxpREFBOEM7QUFFOUMsTUFBYSxXQUFXO0lBQ2IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFjO1FBQ2xDLElBQUksTUFBTSxHQUFpQixJQUFJLEtBQUssRUFBUyxDQUFDO1FBRTlDLElBQUksUUFBUSxHQUFHO1lBQ1gsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFO1lBQ3ZDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRTtTQUMxQyxDQUFDO1FBRUYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNSLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsMkJBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQ3BFLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQzdCLENBQUMsQ0FBQztnQkFDRixLQUFLLEVBQUUsRUFBRTthQUNaLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUNKO0FBckJELGtDQXFCQyJ9