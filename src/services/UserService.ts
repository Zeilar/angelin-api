import { UserRepository } from "@/db/repositories";
import { ICreateUser } from "@/types/models";
import { injectable } from "inversify";

@injectable()
export class UserService {
    constructor(public readonly userRepo: UserRepository) {}

    public register(data: ICreateUser) {
        // TODO: validate
        return this.userRepo.create(data);
    }
}
