import "dotenv/config";
import { ConnectionOptions } from "typeorm";

export const domainsConnection: ConnectionOptions = {
    name: process.env.c1_name,
    type: "mysql",
    host: process.env.c1_host ?? "localhost",
    port: parseInt(process.env.c1_port) ?? 3306,
    username: process.env.c1_username,
    password: process.env.c1_password,
    database: process.env.c1_database,
};
