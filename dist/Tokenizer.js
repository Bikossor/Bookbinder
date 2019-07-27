"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tokenizer {
    static tokenize(regex, text) {
        var regexResult;
        var result = new Array();
        do {
            regexResult = regex.exec(text);
            if (regexResult) {
                result.push({
                    Match: regexResult[0],
                    Value: regexResult[1],
                    Index: regexResult.index
                });
            }
        } while (regexResult);
        return result;
    }
}
exports.Tokenizer = Tokenizer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5pemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1Rva2VuaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQWEsU0FBUztJQUNYLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBYSxFQUFFLElBQVk7UUFDOUMsSUFBSSxXQUE0QixDQUFDO1FBQ2pDLElBQUksTUFBTSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFFakMsR0FBRztZQUNDLFdBQVcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRS9CLElBQUksV0FBVyxFQUFFO2dCQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ1IsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUNyQixLQUFLLEVBQUUsV0FBVyxDQUFDLEtBQUs7aUJBQzNCLENBQUMsQ0FBQzthQUNOO1NBQ0osUUFBUSxXQUFXLEVBQUU7UUFFdEIsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUNKO0FBbkJELDhCQW1CQyJ9