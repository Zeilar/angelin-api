import { App } from "./";
import express from "express";
import { ConnectionsManager, domainsConnection } from "../config";

const server = express();
const connections = new ConnectionsManager([domainsConnection]);

function bootstrap() {
    const app = new App(server, connections);
    app.start();
    return app;
}

export const app = bootstrap();
