import { IToken } from "./Interfaces/IToken";

export class Tokenizer {
    public static tokenize(regex: RegExp, text: string) {
        var regexResult: RegExpExecArray;
        var result = new Array<IToken>();

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