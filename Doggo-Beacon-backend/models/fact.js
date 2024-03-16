const Result = require("./result");

class Fact extends Result {
  static get tableName() {
    return "dog_facts";
  }
}

module.exports = Fact;
