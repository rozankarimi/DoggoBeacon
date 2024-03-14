const Result = require("./result");

class Fact extends Result {
  static get tableName() {
    return "fact";
  }
}

module.exports = Fact;
