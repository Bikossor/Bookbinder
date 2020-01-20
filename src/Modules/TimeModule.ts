export class TimeModule {
    public static run(args?: Array<string>): string {
        return new Date().toTimeString();
    }
}
