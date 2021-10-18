import * as inversify from "inversify-express-utils";
import { UserService } from "@/services";
import { ICreateUser } from "@/types/models";

@inversify.controller("/users")
export class DomainController extends inversify.BaseHttpController {
    constructor(public readonly userService: UserService) {
        super();
    }

    @inversify.httpPost("/")
    public register(@inversify.requestBody() body: ICreateUser) {
        return this.userService.register(body);
    }
}
