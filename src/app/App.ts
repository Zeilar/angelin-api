import { Application } from "express";
import { Container } from "inversify";
import { Logger, ConsoleLogger } from "@utils";
import { InversifyExpressServer } from "inversify-express-utils";
import * as Repositories from "@db/repositories";
import { serverConfig, errorConfig } from "@config";
import knex from "knex";
import { Model } from "objection";
import { connection } from "@config/connection";
import { join } from "path";
import "@api/controllers";

const { PORT } = process.env;

export class App {
    public server: Application;
    public container: Container;

    public async start() {
        ConsoleLogger.yellow("Starting application...");
        await this.connectToDatabase();
        this.installDependencies();
        this.installErrorListeners();
        this.build();
        this.installViewEngine();
        this.listen();
        ConsoleLogger.green("App successfully started");
        return this;
    }

    private build() {
        ConsoleLogger.yellow("Building app...");
        this.server = new InversifyExpressServer(this.container)
            .setConfig((server) => serverConfig(server, this))
            .setErrorConfig((server) => errorConfig(server, this))
            .build();
        ConsoleLogger.green("Built app");
        return this;
    }

    private listen() {
        this.server.listen(PORT, () =>
            ConsoleLogger.green(`Listening on port ${PORT}`)
        );
        return this;
    }

    private installViewEngine() {
        ConsoleLogger.yellow("Installing EJS...");
        this.server.set("view engine", "ejs");
        this.server.set("views", join(__dirname, "../views"));
        ConsoleLogger.green("Installed EJS");
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
        this.container.bind(ConsoleLogger).toSelf();

        ConsoleLogger.green("Installed dependencies");
        return this;
    }

    private async connectToDatabase() {
        ConsoleLogger.yellow("Connecting to database...");
        Model.knex(knex(connection));
        ConsoleLogger.green("Connected to database");
        return this;
    }
}
