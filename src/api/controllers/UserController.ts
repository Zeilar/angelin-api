import * as inversify from "inversify-express-utils";
import { UserService } from "@/services";

@inversify.controller("/users")
export class DomainController extends inversify.BaseHttpController {
    constructor(public readonly userService: UserService) {
        super();
    }

    @inversify.httpPost("/")
    public register() {
        return this.userService.register();
    }
}
