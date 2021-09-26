import "dotenv/config";
import { Express } from "express";
import { createConnections } from "typeorm";
import { ConnectionsManager } from "../config";
import { Logger } from "../utils/Logger";

const { PORT } = process.env;

const logger = new Logger();

export class App {
    constructor(
        public readonly server: Express,
        private readonly conManager: ConnectionsManager
    ) {}

    public async start() {
        console.log("\x1b[33m", "Starting application...");
        await this.connect();
        this.addErrorListeners();
        this.listen();
        console.log("\x1b[32m", "App successfully started");
        return this;
    }

    private listen() {
        this.server.listen(PORT, () =>
            console.log(`Listening on port ${PORT}`)
        );
        return this;
    }

    private addErrorListeners() {
        console.log("\x1b[33m", "Setting up error listeners...");
        process.on("uncaughtException", (error) => {
            logger.error(error);
        });
        process.on("unhandledRejection", (error: Error) => {
            logger.error(error);
        });
        console.log("\x1b[32m", "Set up error listeners");
        return this;
    }

    private async connect() {
        console.log("\x1b[33m", "Connecting to databases...");
        await createConnections(this.conManager.connections);
        console.log("\x1b[32m", "Connected to databases");
        return this;
    }
}
