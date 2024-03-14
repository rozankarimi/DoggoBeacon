/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("dog_breed", function (table) {
    table.increments("id").primary();
    table.string("Height").notNullable(); // Height
    table.string("Playfullness").notNullable(); //Playfullness
    table.string("Energy").notNullable(); //Energy
    table.string("Shedding").notNullable(); //Shedding
    table.string("Trainibility").notNullable(); //Trainibility
    table.string("Grooming").notNullable(); //Grooming
    table.string("Weight").notNullable(); //Weight
    table.string("Barking").notNullable(); //Barking
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("dog_breed");
};
