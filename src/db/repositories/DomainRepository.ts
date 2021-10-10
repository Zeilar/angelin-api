import { injectable } from "inversify";
import { Domain } from "@db/models/Domain";

@injectable()
export class DomainRepository {
    public getAll() {
        console.log(Domain.query());
        return Domain.query();
    }
}
