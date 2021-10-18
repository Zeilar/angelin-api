import { injectable } from "inversify";
import { Domain } from "@/db/models";
import { ID } from "@/_types/global";
import { ICreateDomain, IEditDomain } from "@/_types/models";
import { QueryBuilder } from "objection";

@injectable()
export class DomainRepository {
    public getAll() {
        return Domain.query();
    }

    public create(domain: ICreateDomain) {
        return Domain.query().insert(domain);
    }

    public edit(domain: Domain): QueryBuilder<Domain, Domain>;
    public edit(domain: ID, data: IEditDomain): QueryBuilder<Domain, Domain>;
    public edit(
        domain: Domain | ID,
        data?: IEditDomain
    ): QueryBuilder<Domain, Domain> {
        if (domain instanceof Domain) {
            return domain.$query().updateAndFetch(domain);
        }
        return Domain.query().updateAndFetchById(domain, data ?? {});
    }

    public delete(domain: Domain | ID) {
        if (domain instanceof Domain) {
            return domain.$query().delete();
        }
        return Domain.query().deleteById(domain);
    }
}
