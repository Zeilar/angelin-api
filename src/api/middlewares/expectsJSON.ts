import { Request } from "express";

export async function expectsJSON(req: Request) {
    return Boolean(req.headers.accept?.includes("application/json"));
}
