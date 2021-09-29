import { App } from "./";
import express from "express";
import { connection } from "../config";

const server = express();

function bootstrap() {
    const app = new App(server, connection);
    app.start();
    return app;
}

export const app = bootstrap();
