const AbstractManager = require("./AbstractManager");

class MoodManager extends AbstractManager {
  constructor() {
    super({ table: "mood" });
  }

  insert(mood) {
    return this.database
      .query(`INSERT INTO ${this.table} (title, description) VALUES (?, ?)`, [
        mood.title,
        mood.description,
      ])
      .then((result) => result.insertId);
  }

  update(mood) {
    return this.database.query(
      `UPDATE ${this.table} SET title = ? WHERE id = ?`,
      [mood.title, mood.id]
    );
  }

  delete(moodId) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      moodId,
    ]);
  }
}

module.exports = MoodManager;
