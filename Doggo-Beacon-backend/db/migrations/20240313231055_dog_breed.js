/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("dog_breed", function (table) {
    table.increments("id").primary();
    table.string("height").notNullable();
    table.string("name").notNullable();
    table.string("playfulness").notNullable();
    table.string("image_link").notNullable();
    table.string("energy").notNullable();
    table.string("shedding").notNullable();
    table.string("trainability").notNullable();
    table.string("grooming").notNullable();
    table.string("weight").notNullable();
    table.string("barking").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("dog_breed");
};
