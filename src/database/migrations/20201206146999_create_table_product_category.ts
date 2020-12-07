import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(
    "product_categories",
    (table: Knex.CreateTableBuilder) => {
      table.increments("id");
      table.text("name").notNullable();
      table.integer("companyId").unsigned();
      table
        .foreign("companyId")
        .references("companies.id")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      table.timestamps();
    }
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("product_categories");
}
