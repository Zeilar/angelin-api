export type DB_CLIENT =
    | "postgresql"
    | "mysql"
    | "mariadb"
    | "mongodb"
    | "sqlite";
export type NODE_ENV = "development" | "production";
export type PORT = number;
export type DB_HOST = string;
export type DB_USER = string;
export type DB_PASSWORD = string | undefined;
export type DB_NAME = string;
export type DB_URL = string;
