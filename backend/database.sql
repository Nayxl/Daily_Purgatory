CREATE TABLE user (
  id INT(11) unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT,
  username VARCHAR(80) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  mail VARCHAR(40) NOT NULL UNIQUE,
  is_admin BOOLEAN DEFAULT FALSE
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE journal (
  id INT(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_user INT(11) UNSIGNED NOT NULL,
   privacy BOOLEAN DEFAULT FALSE,
  KEY `fk_journal_user` (`id_user`),
CONSTRAINT `fk_journal_user` FOREIGN KEY (id_user) REFERENCES `user`(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE note (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_journal INT(11) UNSIGNED NOT NULL,
  title varchar(255) NOT NULL,
  description varchar(1000) NOT NULL,
  KEY `fk_journal_note` (`id_note`),
  CONSTRAINT `fk_journal_note` FOREIGN KEY (id_journal) REFERENCES `journal`(id),
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE mood (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_journal INT(11) UNSIGNED NOT NULL,
  title varchar(255) NOT NULL,
  description varchar(9999) NOT NULL,
  KEY `fk_journal_mood` (`id_mood`),
  CONSTRAINT `fk_journal_mood` FOREIGN KEY (id_journal) REFERENCES `journal`(id),
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE picture (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_journal INT(11) UNSIGNED NOT NULL,
  name varchar(25) NOT NULL,
  image varchar(255) NOT NULL,
  KEY `fk_journal_picture` (`id_picture`),
  CONSTRAINT `fk_journal_picture` FOREIGN KEY (id_journal) REFERENCES `journal`(id),
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE privacy (
  id INT(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  KEY `fk_privacy_note` (`id_note`),
  KEY `fk_privacy_mood` (`id_mood`),
  KEY `fk_privacy_picture` (`id_picture`),
  CONSTRAINT `fk_privacy_note` FOREIGN KEY (id_privacy) REFERENCES `privacy`(id),
  CONSTRAINT `fk_privacy_mood` FOREIGN KEY (id_privacy) REFERENCES `privacy`(id),
  CONSTRAINT `fk_privacy_picture` FOREIGN KEY (id_privacy) REFERENCES `privacy`(id),
  
)

INSERT INTO user (username, password, mail, is_admin) VALUES
("admin", "bigboss1", "admin@daily.net", TRUE),
("user", "sousbig2", "user@daily.net", FALSE);

INSERT INTO journal (privacy) VALUES ("admin", "bigboss1", "admin@daily.net", TRUE);

INSERT INTO note (title, description) VALUES
('Welcome'), ('Il était une fois.....');

INSERT INTO mood (title, description) VALUES ('Dear...'), ('Blablablablablablablabla');

INSERT INTO picture (name,image) VALUES ('Malu'), ('image.jpg');

INSERT INTO privacy (title) VALUES ('Note privée');

