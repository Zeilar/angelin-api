export class ConsoleLogger {
    public static white(message: string) {
        console.log("\x1b[37m", message);
        return this;
    }

    public static yellow(message: string) {
        console.log("\x1b[33m", message);
        return this;
    }

    public static green(message: string) {
        console.log("\x1b[32m", message);
        return this;
    }

    public static red(message: string) {
        console.log("\x1b[31m", message);
        return this;
    }
}
