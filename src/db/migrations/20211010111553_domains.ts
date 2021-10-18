import { Knex } from "knex";

export async function up(knex: Knex) {
    return knex.schema
        .createTable("domains", (table) => {
            table.increments();
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
        })
        .createTable("users", (table) => {
            table.increments();
            table.string("email").unique().notNullable();
            table.string("password").nullable();
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
