import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(
    "companies",
    function (table: Knex.CreateTableBuilder) {
      table.increments("id");
      table.string("fantasyName").notNullable();
      table.string("name");
      table.string("cnpj");
      table.timestamps();
    }
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("companies");
}
