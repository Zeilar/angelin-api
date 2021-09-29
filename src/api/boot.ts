import { App } from "./";
import express from "express";

const server = express();

function bootstrap() {
    const app = new App(server);
    app.start();
    return app;
}

export const app = bootstrap();
