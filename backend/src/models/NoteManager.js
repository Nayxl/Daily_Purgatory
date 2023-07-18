const AbstractManager = require("./AbstractManager");

class NoteManager extends AbstractManager {
  constructor() {
    super({ table: "note" });
  }

  insert(note) {
    return this.database.query(
      `insert into ${this.table} (title,description) values (?, ?)`,
      [note.title, note.description]
    );
  }

  update(note) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [note.title, note.description, note.id]
    );
  }
}

module.exports = NoteManager;
