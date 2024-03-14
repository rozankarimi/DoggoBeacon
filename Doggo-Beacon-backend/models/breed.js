const Result = require("./result");

class Breed extends Result {
  static get tableName() {
    return "breed";
  }
}

module.exports = Breed;
