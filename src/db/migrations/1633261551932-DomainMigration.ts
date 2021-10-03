import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class DomainMigration1633261551932 implements MigrationInterface {
    public async up(queryRunner: QueryRunner) {
        queryRunner.createTable(
            new Table({
                name: "domains",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "text",
                    },
                    {
                        name: "url",
                        type: "text",
                    },
                    {
                        name: "created_at",
                        type: "date",
                    },
                    {
                        name: "updated_at",
                        type: "date",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner) {
        queryRunner.dropTable("domains");
    }
}
