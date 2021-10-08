import { injectable } from "inversify";
import { getRepository } from "typeorm";
import { Domain } from "@db/models/Domain";

@injectable()
export class DomainRepository {
    private repo = getRepository(Domain);

    public async getAll() {
        return await this.repo.find();
    }
}
