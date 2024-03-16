const Result = require("./result");

class Breed extends Result {
  static get tableName() {
    return "dog_breed";
  }
}

module.exports = Breed;
