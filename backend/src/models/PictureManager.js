const AbstractManager = require("./AbstractManager");

class PictureManager extends AbstractManager {
  constructor() {
    super({ table: "picture" });
  }

  insert(picture) {
    return this.database.query(
      `insert into ${this.table} (title, image) values (?,?)`,
      [picture.name, picture.image]
    );
  }

  update(picture) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [picture.name, picture.id, picture.image]
    );
  }
}

module.exports = PictureManager;
