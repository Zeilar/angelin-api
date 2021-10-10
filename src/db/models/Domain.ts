import { Model } from "objection";

export class Domain extends Model {
    public static tableName = "domains";

    public id: string;
    public name: string;
    public url: string;
    public created_at: string;
    public updated_at: string;
}
