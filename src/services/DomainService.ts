import { DomainRepository } from "@/db/repositories";
import { ICreateDomain } from "@/types/models";
import { injectable } from "inversify";

@injectable()
export class DomainService {
    constructor(public readonly domainRepo: DomainRepository) {}

    public create(data: ICreateDomain) {
        // TODO: validate
        return this.domainRepo.create(data);
    }
}
