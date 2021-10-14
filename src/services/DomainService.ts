import { DomainRepository } from "@db/repositories";
import { ICreateDomain } from "@_types/models";
import { injectable } from "inversify";

@injectable()
export class DomainService {
    constructor(public readonly domainRepo: DomainRepository) {}

    public create(data: ICreateDomain) {
        return this.domainRepo.create(data);
    }
}
