import { injectable } from "inversify";
import { getRepository } from "typeorm";
import { Domain } from "../entities/Domain";

@injectable()
export class DomainRepository {
    private repo = getRepository(Domain);

    public async getAll() {
        return await this.repo.find();
    }
}
