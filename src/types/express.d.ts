export {};

declare global {
    namespace Express {
        interface Response {
            expectsJSON?: boolean;
        }
    }
}
