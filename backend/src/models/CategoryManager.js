const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  insert(category) {
    return this.database.query(
      `insert into ${this.table} (title,description) values (?, ?)`,
      [category.title, category.description]
    );
  }

  update(category) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [category.title, category.description, category.id]
    );
  }
}

module.exports = CategoryManager;
