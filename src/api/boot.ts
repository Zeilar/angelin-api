import { App } from "./";
import express from "express";

const server = express();

function bootstrap() {
    const app = new App(server);
    app.start();
    return app;
}

server.get("/test", (req, res) => {
    res.send("Hello world");
});

export const app = bootstrap();
