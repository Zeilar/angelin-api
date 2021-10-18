import { Model, JSONSchema } from "objection";

export class User extends Model {
    public static readonly tableName = "users";

    public id: string;
    public email: string;
    public created_at: string;
    public updated_at: string;

    public static jsonSchema: JSONSchema = {
        type: "object",
        required: ["id", "email", "created_at", "updated_at"],
        properties: {
            id: { type: ["string", "integer"] },
            email: { type: "string", minLength: 1 },
            created_at: { type: "string", minLength: 1 },
            updated_at: { type: "string", minLength: 1 },
        },
    };
}
