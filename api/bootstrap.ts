import { App } from "./";
import express from "express";
import { connections } from "../config";

const server = express();

function bootstrap() {
    const app = new App(server, connections);
    app.start();
    return app;
}

export const app = bootstrap();
