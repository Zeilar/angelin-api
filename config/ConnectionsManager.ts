import { ConnectionOptions } from "typeorm";

export class ConnectionsManager {
    constructor(public readonly connections: ConnectionOptions[]) {}
}
