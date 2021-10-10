import { Knex } from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable("domains", (table) => {
        table.uuid("id").primary().defaultTo("uuid_generate_v4()");
        table.string("name").unique().notNullable();
        table.string("url").unique().notNullable();
        table
            .timestamp("created_at")
            .notNullable()
            .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
        table
            .timestamp("updated_at")
            .notNullable()
            .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTableIfExists("domains");
}
