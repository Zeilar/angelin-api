export {};

import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            C1_NAME: MysqlConnectionOptions["name"];
            C1_TYPE: MysqlConnectionOptions["type"];
            C1_HOST: MysqlConnectionOptions["host"];
            C1_PORT: MysqlConnectionOptions["port"];
            C1_USERNAME: MysqlConnectionOptions["username"];
            C1_PASSWORD: MysqlConnectionOptions["password"];
            C1_DATABASE: MysqlConnectionOptions["database"];
        }
    }
}
