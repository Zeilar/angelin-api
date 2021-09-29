import "dotenv/config";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const { env } = process;

export const domainsConnection: MysqlConnectionOptions = {
    name: env.C1_NAME,
    type: env.C1_TYPE,
    host: env.C1_HOST,
    port: env.C1_PORT,
    username: env.C1_USERNAME,
    password: env.C1_PASSWORD,
    database: env.C1_DATABASE,
};
