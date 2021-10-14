import { NextFunction, Request, Response } from "express";

export async function expectsJSON(
    req: Request,
    res: Response,
    next: NextFunction
) {
    throw new Error("sdofjdoi");
    res.expectsJSON = Boolean(req.headers.accept?.includes("application/json"));
    next();
}
