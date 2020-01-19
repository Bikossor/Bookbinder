export class DateModule {
    public static run(args?: Array<string>): string {
        return new Date().toDateString();
    }
}
