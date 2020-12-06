import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(
    "users",
    function (table: Knex.CreateTableBuilder) {
      table.increments("id");
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("password");
      table.string("role");
      table.string("photo");
      table.string("cpf");
      table.date("birthday");
      table.string("phone");
      table.string("pushToken");
      table.string("pushPlatform");
      table.timestamps();
      table.integer("companyId").unsigned();
      table
        .foreign("companyId")
        .references("companies.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    }
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
