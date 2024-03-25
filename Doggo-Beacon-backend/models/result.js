const knex = require("knex")(require("../knexfile").development);

class Result {
  static get tableName() {
    return "You must override this method in your model";
  }

  static async all() {
    return await knex(this.tableName).select("*");
  }

  static async find(id) {
    return await knex(this.tableName).where("id", id).first();
  }

  static async update(id, data) {
    return await knex(this.tableName).where("id", id).update(data);
  }

  static async attributes() {
    columnInfo = await knex(this.tableName).columnInfo();
    return Object.keys(columnInfo);
  }
}

module.exports = Result;
