import * as inversify from "inversify-express-utils";
import { Response } from "express";

@inversify.controller("/")
export class ViewsControllers extends inversify.BaseHttpController {
    @inversify.httpGet("/")
    public index(@inversify.response() res: Response) {
        res.render("index");
    }
}
