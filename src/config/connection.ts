import { join } from "path";
import { NODE_ENV } from "types/connection";

const { env } = process;
const NODE_ENV = env.NODE_ENV as NODE_ENV;

const defaults = {
    client: env.DB_CLIENT,
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    migrations: {
        directory: join(__dirname, "../db/migrations"),
        tableName: "knex_migrations",
    },
    seeds: {
        directory: join(__dirname, "../db/seeds"),
    },
};

export const development = {
    ...defaults,
    debug: true,
};

export const production = {
    ...defaults,
    debug: false,
};

export const connections = {
    development,
    production,
};

export const connection = connections[NODE_ENV];
