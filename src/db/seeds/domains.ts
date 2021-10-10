import { Knex } from "knex";

export async function seed(knex: Knex) {
    await knex("domains").del();

    await knex("domains").insert([
        { name: "The Pioneer Hangout", url: "https://tph.angelin.dev" },
        { name: "Blog", url: "https://blog.angelin.dev" },
        { name: "Radio", url: "https://radio.angelin.dev" },
    ]);
}
