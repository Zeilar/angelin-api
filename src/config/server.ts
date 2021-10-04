import { Application } from "express";
import { interfaces } from "inversify-express-utils";
import { json, urlencoded } from "body-parser";

export function serverConfig(server: Application): interfaces.ConfigFunction {
    return () => {
        server.use(json(), urlencoded({ extended: true }));
    };
}

export function errorConfig(server: Application): interfaces.ConfigFunction {
    return () => {
        //
    };
}
