export class PackageModule {
    public static run(args?: Array<string>): string {
        return args.join("-");
    }
}
