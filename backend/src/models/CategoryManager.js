const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  insert(category) {
    return this.database.query(
      `INSERT INTO ${this.table} (title, description) VALUES (?, ?)`,
      [category.title, category.description]
    );
  }

  update(category) {
    return this.database.query(
      `UPDATE ${this.table} SET title = ? WHERE id = ?`,
      [category.title, category.id]
    );
  }
}

module.exports = CategoryManager;
