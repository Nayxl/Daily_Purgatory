const AbstractManager = require("./AbstractManager");

class PictureManager extends AbstractManager {
  constructor() {
    super({ table: "picture" });
  }

  find(id) {
    return this.database.query(
      `select picture.*,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            "mood_id", mood.id,
            "title", mood.title
          )
        ) as moods
        from ${this.table}
        join mood_picture on mood_picture.picture_id = picture.id
        join mood on mood_picture.mood_id = mood.id
        where picture.id = ?
        group by picture.id`,
      [id]
    );
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
