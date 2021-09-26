import "dotenv/config";
import { Express } from "express";
import { ConnectionOptions, createConnections } from "typeorm";
import { Logger, ConsoleLogger } from "../utils";
import { connections } from "../config";

const { PORT } = process.env;

const logger = new Logger();

export class App {
    constructor(
        public readonly server: Express,
        public readonly connections: ConnectionOptions[]
    ) {}

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
        ConsoleLogger.yellow("Connecting to databases...");
        await createConnections(connections);
        ConsoleLogger.green("Connected to databases");
        return this;
    }
}
