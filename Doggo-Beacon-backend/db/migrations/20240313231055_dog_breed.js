/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("dogbreed", function (table) {
    table.increments("id").primary();
    table.string("height").notNullable();
    table.string("playfulness").notNullable();
    table.string("energy").notNullable();
    table.string("shedding").notNullable();
    table.string("trainability").notNullable();
    table.string("grooming").notNullable();
    table.string("weight").notNullable();
    table.string("barking").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("dogbreed");
};
