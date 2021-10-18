import * as inversify from "inversify-express-utils";
import { Request, Response } from "express";
import { DomainRepository } from "@/db/repositories";
import { expectsJSON } from "@/api/middlewares";

@inversify.controller("/")
export class ViewsControllers extends inversify.BaseHttpController {
    constructor(public readonly domainRepo: DomainRepository) {
        super();
    }

    @inversify.httpGet("/", expectsJSON)
    public async index(
        @inversify.response() res: Response,
        @inversify.request() req: Request
    ) {
        if (res.expectsJSON) {
            const domains = await this.domainRepo.getAll();
            return this.json({ data: { domains } });
        }
        res.render("index");
    }
}
