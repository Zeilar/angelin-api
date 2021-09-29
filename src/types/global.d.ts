export {};

import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DB_NAME: MysqlConnectionOptions["name"];
            DB_TYPE: MysqlConnectionOptions["type"];
            DB_HOST: MysqlConnectionOptions["host"];
            DB_PORT: MysqlConnectionOptions["port"];
            DB_USERNAME: MysqlConnectionOptions["username"];
            DB_PASSWORD: MysqlConnectionOptions["password"];
            DB_DATABASE: MysqlConnectionOptions["database"];
        }
    }
}
