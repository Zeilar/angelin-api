import { Application, Request, Response } from "express";
import { json, urlencoded } from "body-parser";
import rateLimit from "express-rate-limit";
import { DateHelpers, Logger } from "@utils";
import { App } from "@app";

export function serverConfig(server: Application, app: App) {
    server.use(
        json(),
        urlencoded({ extended: true }),
        rateLimit({
            windowMs: DateHelpers.MINUTE_IN_MILLISECONDS * 10,
            max: 1000,
            handler: (req, res) => {
                res.status(429).send({
                    error: "Too many requests, try again later.",
                });
            },
        })
    );
}

export function errorConfig(server: Application, app: App) {
    server.use((req: Request, res: Response) => {
        if (res.statusCode >= 400) {
            app.container.get(Logger).error(new Error("Something went wrong."));
            res.status(500).json({ error: "Something went wrong." });
        }
    });
}
