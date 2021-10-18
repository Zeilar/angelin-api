import * as inversify from "inversify-express-utils";
import { DomainRepository } from "@/db/repositories";

@inversify.controller("/domains")
export class DomainController extends inversify.BaseHttpController {
    constructor(public readonly domainRepo: DomainRepository) {
        super();
    }

    @inversify.httpGet("/")
    public getAll() {
        return this.domainRepo.getAll();
    }
}
