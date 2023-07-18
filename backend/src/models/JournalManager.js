const AbstractManager = require("./AbstractManager");

class JournalManager extends AbstractManager {
  constructor() {
    super({ table: "journal" });
  }

  insert(journal) {
    return this.database.query(
      `insert into ${this.table} (title,description) values (?, ?)`,
      [journal.title, journal.description]
    );
  }

  update(journal) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [journal.title, journal.description, journal.id]
    );
  }
}

module.exports = JournalManager;
