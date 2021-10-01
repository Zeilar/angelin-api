import "dotenv/config";
import { Express } from "express";
import { createConnection, getConnectionOptions } from "typeorm";
import { Logger, ConsoleLogger } from "../utils";

const { PORT } = process.env;

const logger = new Logger();

export class App {
    constructor(public readonly server: Express) {}

    public async start() {
        ConsoleLogger.yellow("Starting application...");
        await this.connect();
        this.addErrorListeners();
        this.listen();
        ConsoleLogger.green("App successfully started");
        return this;
    }

    private listen() {
        this.server.listen(PORT, () =>
            ConsoleLogger.green(`Listening on port ${PORT}`)
        );
        return this;
    }

    private addErrorListeners() {
        ConsoleLogger.yellow("Setting up error listeners...");
        process.on("uncaughtException", (error) => {
            logger.error(error);
        });
        process.on("unhandledRejection", (error: Error) => {
            logger.error(error);
        });
        ConsoleLogger.green("Set up error listeners");
        return this;
    }

    private async connect() {
        ConsoleLogger.yellow("Connecting to database...");
        console.log(
            "connection",
            await getConnectionOptions(process.env.NODE_ENV)
        );
        // await createConnection({
        //     type: "mysql",
        //     host: "mysql",
        //     port: 3306,
        //     password: "123",
        //     username: "root",
        //     database: "angelin-api",
        //     name: "development",
        // });
        await createConnection(
            await getConnectionOptions(process.env.NODE_ENV)
        );
        ConsoleLogger.green("Connected to database");
        return this;
    }
}