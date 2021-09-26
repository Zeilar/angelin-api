export class ConsoleLogger {
    public static readonly colors = {
        reset: "\x1b[0m",
        bright: "\x1b[1m",
        dim: "\x1b[2m",
        underscore: "\x1b[4m",
        blink: "\x1b[5m",
        reverse: "\x1b[7m",
        hidden: "\x1b[8m",

        fgBlack: "\x1b[30m",
        fgRed: "\x1b[31m",
        fgGreen: "\x1b[32m",
        fgYellow: "\x1b[33m",
        fgBlue: "\x1b[34m",
        fgMagenta: "\x1b[35m",
        fgCyan: "\x1b[36m",
        fgWhite: "\x1b[37m",

        bgBlack: "\x1b[40m",
        bgRed: "\x1b[41m",
        bgGreen: "\x1b[42m",
        bgYellow: "\x1b[43m",
        bgBlue: "\x1b[44m",
        bgMagenta: "\x1b[45m",
        bgCyan: "\x1b[46m",
        bgWhite: "\x1b[47m",
    };

    public static reset() {
        console.log(this.colors.reset, "");
        return this;
    }

    public static white(message: string) {
        console.log(this.colors.fgWhite, message);
        return this;
    }

    public static yellow(message: string) {
        console.log(this.colors.fgYellow, message);
        return this;
    }

    public static green(message: string) {
        console.log(this.colors.fgGreen, message);
        return this;
    }

    public static red(message: string) {
        console.log(this.colors.fgRed, message);
        return this;
    }
}
