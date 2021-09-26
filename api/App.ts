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
        await this.connect();
        this.addErrorListeners();
        this.listen();
        console.log("App successfully started!");
        return this;
    }

    private listen() {
        this.server.listen(PORT, () =>
            console.log(`Listening on port ${PORT}`)
        );
        return this;
    }

    private addErrorListeners() {
        console.log("Setting up error listeners...");
        process.on("uncaughtException", (error) => {
            logger.error(error);
        });
        process.on("unhandledRejection", (error: Error) => {
            logger.error(error);
        });
        return this;
    }

    private async connect() {
        console.log("Connecting to databases...");
        await createConnections(this.conManager.connections);
        console.log("Connected to databases");
        return this;
    }
}
