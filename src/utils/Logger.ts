import { join } from "path";
import fs from "fs";
import dayjs from "dayjs";
import { ConsoleLogger } from ".";
import { injectable } from "inversify";

@injectable()
export class Logger {
    public log(folder: string, message: string) {
        ConsoleLogger.red(message); // TODO: remove in production

        const now = new Date();

        const today = dayjs(now).format("YYYY-MM-DD"),
            folderPath = join(__dirname, `../${folder}`),
            filePath = join(folderPath, `${today}.txt`),
            content = `${now}\n${message}`;

        function loggingError(error: NodeJS.ErrnoException | null) {
            if (error) {
                ConsoleLogger.red(`Failed creating log: ${error}`);
            }
        }

        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }

        if (fs.existsSync(filePath)) {
            fs.appendFile(filePath, `\n\n${content}`, (error) =>
                loggingError(error)
            );
        } else {
            fs.writeFile(filePath, `${content}`, (error) =>
                loggingError(error)
            );
        }
    }

    public error(error: Error) {
        this.log("errors", error?.stack ?? "");
    }

    public warning(warning: Error) {
        this.log("warnings", warning.message);
    }
}
