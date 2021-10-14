export {};

import { User as UserModel } from "@db/models";

declare global {
    namespace Express {
        interface User extends UserModel {}

        interface Response {
            expectsJSON?: boolean;
        }
    }
}
