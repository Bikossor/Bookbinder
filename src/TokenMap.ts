export const TokenMap = {
    "time": (): string => new Date().toTimeString(),
    "date": (): string => new Date().toDateString(),
    "package": (args: Array<string>): string => args.join("-"),
}
