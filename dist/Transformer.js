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
                Content: file.Content.replace(Configurator_1.Configurator.TokenRegex, this.replace),
                Lines: []
            });
        });
        return result;
    }
    static replace(match, token) {
        const [tokenName, ...tokenArgs] = token.split("\.");
        return TokenMap_1.TokenMap[tokenName](tokenArgs);
    }
}
exports.Transformer = Transformer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNmb3JtZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxpREFBOEM7QUFDOUMseUNBQXNDO0FBRXRDLE1BQWEsV0FBVztJQUNiLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBbUI7UUFDdkMsTUFBTSxNQUFNLEdBQWlCLElBQUksS0FBSyxFQUFTLENBQUM7UUFFaEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNSLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsMkJBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDcEUsS0FBSyxFQUFFLEVBQUU7YUFDWixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFTyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQWEsRUFBRSxLQUFhO1FBQy9DLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELE9BQU8sbUJBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0o7QUFuQkQsa0NBbUJDIn0=