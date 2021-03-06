import { Model, JSONSchema } from "objection";

export class Domain extends Model {
    public static readonly tableName = "domains";

    public id: string;
    public name: string;
    public url: string;
    public created_at: string;
    public updated_at: string;

    public static jsonSchema: JSONSchema = {
        type: "object",
        required: ["id", "url", "name", "created_at", "updated_at"],
        properties: {
            id: { type: ["string", "integer"] },
            url: { type: "string", minLength: 1 },
            name: { type: "string", minLength: 1 },
            created_at: { type: "string", minLength: 1 },
            updated_at: { type: "string", minLength: 1 },
        },
    };
}
