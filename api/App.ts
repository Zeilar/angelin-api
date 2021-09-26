import "dotenv/config";
import { Express } from "express";
import { createConnections } from "typeorm";
import { ConnectionsManager } from "../config";
import { Logger, ConsoleLogger } from "../utils";

const { PORT } = process.env;

const logger = new Logger();

export class App {
    constructor(
        public readonly server: Express,
        private readonly conManager: ConnectionsManager
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
            console.log(`Listening on port ${PORT}`)
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
        await createConnections(this.conManager.connections);
        ConsoleLogger.green("Connected to databases");
        return this;
    }
}