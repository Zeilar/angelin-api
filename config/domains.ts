import "dotenv/config";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

export const domainsConnection: MysqlConnectionOptions = {
    name: process.env.C1_NAME,
    type: process.env.C1_TYPE,
    host: process.env.C1_HOST,
    port: process.env.C1_PORT,
    username: process.env.C1_USERNAME,
    password: process.env.C1_PASSWORD,
    database: process.env.C1_DATABASE,
};
