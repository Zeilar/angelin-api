export {};

import * as ConnectionTypes from "./connection";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: ConnectionTypes.NODE_ENV;
            PORT: ConnectionTypes.PORT;
            DB_CLIENT: ConnectionTypes.DB_CLIENT;
            DB_HOST: ConnectionTypes.DB_HOST;
            DB_USER: ConnectionTypes.DB_USER;
            DB_PASSWORD: ConnectionTypes.DB_PASSWORD;
            DB_NAME: ConnectionTypes.DB_NAME;
            DB_URL: ConnectionTypes.DB_URL;
        }
    }
}
