import { injectable } from "inversify";
import { User } from "@/db/models";
import { ID } from "@/types/global";
import { ICreateUser, IEditUser } from "@/types/models";
import { QueryBuilder } from "objection";

@injectable()
export class UserRepository {
    public create(user: ICreateUser) {
        return User.query().insert(user);
    }

    public edit(user: User): QueryBuilder<User, User>;
    public edit(user: ID, data: IEditUser): QueryBuilder<User, User>;
    public edit(user: User | ID, data?: IEditUser) {
        if (user instanceof User) {
            return user.$query().updateAndFetch(user);
        }
        return User.query().updateAndFetchById(user, data ?? {});
    }
}
