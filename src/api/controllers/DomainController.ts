import * as inversify from "inversify-express-utils";
import { DomainRepository } from "../../db/repositories";

@inversify.controller("/domains")
export class DomainController {
    constructor(public readonly domainRepo: DomainRepository) {}

    @inversify.httpGet("/")
    public async getAll() {
        return await this.domainRepo.getAll();
    }
}