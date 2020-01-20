import {
    TimeModule,
    DateModule,
    PackageModule
} from "./Modules";

export const TokenMap = {
    "time": (): string => TimeModule.run(),
    "date": (): string => DateModule.run(),
    "package": (args: Array<string>): string => PackageModule.run(args),
}
