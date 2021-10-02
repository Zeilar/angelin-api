import "dotenv/config";
import { Application } from "express";
import { Container } from "inversify";
import { join } from "path";
import { createConnection, getConnectionOptions } from "typeorm";
import { Logger, ConsoleLogger } from "../utils";
import { InversifyExpressServer } from "inversify-express-utils";
import * as Repositories from "../repositories";

import "../api/controllers";

const { PORT } = process.env;

export class App {
    public server: Application;
    private container: Container;

    public async start() {
        ConsoleLogger.yellow("Starting application...");
        await this.connect();
        this.installDependencies();
        this.installErrorListeners();
        this.build();
        this.listen();
        ConsoleLogger.green("App successfully started");
        return this;
    }

    private build() {
        ConsoleLogger.yellow("Building app...");
        this.server = new InversifyExpressServer(this.container).build();
        ConsoleLogger.green("Built app");
        return this;
    }

    private listen() {
        this.server.listen(PORT, () =>
            ConsoleLogger.green(`Listening on port ${PORT}`)
        );
        return this;
    }

    private installErrorListeners() {
        ConsoleLogger.yellow("Installing error listeners...");
        const logger = this.container.get(Logger);
        process.on("uncaughtException", (error) => {
            logger.error(error);
        });
        process.on("unhandledRejection", (error: Error) => {
            logger.error(error);
        });
        ConsoleLogger.green("Installed listeners");
        return this;
    }

    private installDependencies() {
        ConsoleLogger.yellow("Installing dependencies...");
        this.container = new Container();

        // Repositories
        this.container.bind(Repositories.DomainRepository).toSelf();

        // Services

        // Misc
        this.container.bind(Logger).toSelf();

        ConsoleLogger.green("Installed dependencies");
        return this;
    }

    private async connect() {
        ConsoleLogger.yellow("Connecting to database...");
        await createConnection({
            ...(await getConnectionOptions(process.env.NODE_ENV)),
            entities: [join(__dirname, "../db/entities/*.ts")],
        });
        ConsoleLogger.green("Connected to database");
        return this;
    }
}
