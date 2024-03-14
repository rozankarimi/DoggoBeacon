const dogbreed = require("../seed_data/dogbreed");

exports.seed = function (knex) {
  //
  return knex("dog_breed")
    .del()
    .then(function () {
      return knex("dog_breed").insert(dogbreed);
    });
};
