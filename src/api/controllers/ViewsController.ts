import * as inversify from "inversify-express-utils";
import { Request, Response } from "express";
import { DomainRepository } from "@db/repositories";

@inversify.controller("/")
export class ViewsControllers extends inversify.BaseHttpController {
    constructor(public readonly domainRepo: DomainRepository) {
        super();
    }

    @inversify.httpGet("/")
    public async index(
        @inversify.response() res: Response,
        @inversify.request() req: Request
    ) {
        const domains = await this.domainRepo.getAll();
        if (req.headers.accept?.includes("application/json")) {
            return this.json({ data: { domains } });
        }
        res.render("index");
    }
}
