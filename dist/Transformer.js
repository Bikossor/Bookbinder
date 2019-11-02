"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Configurator_1 = require("./Configurator");
const TokenMap_1 = require("./TokenMap");
class Transformer {
    static transform(files) {
        const result = new Array();
        files.forEach(file => {
            result.push({
                Name: file.Name,
                Content: file.Content.replace(Configurator_1.Configurator.TokenRegex, (match, token) => {
                    return TokenMap_1.TokenMap[token]();
                }),
                Lines: []
            });
        });
        return result;
    }
}
exports.Transformer = Transformer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNmb3JtZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxpREFBOEM7QUFDOUMseUNBQXNDO0FBRXRDLE1BQWEsV0FBVztJQUNiLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBYztRQUNsQyxNQUFNLE1BQU0sR0FBaUIsSUFBSSxLQUFLLEVBQVMsQ0FBQztRQUVoRCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQywyQkFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtvQkFDcEUsT0FBTyxtQkFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQzdCLENBQUMsQ0FBQztnQkFDRixLQUFLLEVBQUUsRUFBRTthQUNaLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUNKO0FBaEJELGtDQWdCQyJ9