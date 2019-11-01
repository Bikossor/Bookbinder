export class Configurator {
    public static BookbinderFileExtension = '.book';
    public static TokenRegex: RegExp = /\{{2}\s?(\S+)\s?\}{2}/gm;
    public static HeaderRegex: RegExp = /\n(#+\s*)(.*)/gm;
}