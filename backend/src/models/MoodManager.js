const AbstractManager = require("./AbstractManager");

class MoodManager extends AbstractManager {
  constructor() {
    super({ table: "mood" });
  }

  insert(mood) {
    return this.database.query(
      `insert into ${this.table} (title, description) values (?, ?)`,
      [mood.title, mood.description]
    );
  }

  update(mood) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [mood.title, mood.id, mood.description]
    );
  }
}

module.exports = MoodManager;
