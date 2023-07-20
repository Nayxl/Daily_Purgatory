CREATE TABLE category (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE note (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  category_id INT(11) UNSIGNED NOT NULL,
  title varchar(255) NOT NULL,
  description varchar(1000) NOT NULL,
  KEY fk_category_note (category_id),
  CONSTRAINT fk_category_note FOREIGN KEY (category_id) REFERENCES category(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE mood (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  category_id INT(11) UNSIGNED NOT NULL,
  title varchar(255) NOT NULL,
  description varchar(9999) NOT NULL,
  KEY fk_category_mood (category_id),
  CONSTRAINT fk_category_mood FOREIGN KEY (category_id) REFERENCES category(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE picture (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  category_id INT(11) UNSIGNED NOT NULL,
  name varchar(25) NOT NULL,
  image varchar(255) NOT NULL,
  KEY fk_category_picture (category_id),
  CONSTRAINT fk_category_picture FOREIGN KEY (category_id) REFERENCES category(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE mood_picture (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  mood_id INT(11) UNSIGNED NOT NULL,
  picture_id INT(11) UNSIGNED NOT NULL,
  KEY fk_mood_picture_mood (mood_id),
  CONSTRAINT fk_mood_picture_mood FOREIGN KEY (mood_id) REFERENCES mood(id),
  KEY fk_mood_picture_picture (picture_id),
  CONSTRAINT fk_mood_picture_picture FOREIGN KEY (picture_id) REFERENCES picture(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO category (id, name) VALUES
(1, 'Welcome');

INSERT INTO note (title, description, category_id) VALUES
('Welcome', 'Il était une fois.....', 1);

INSERT INTO mood (id, title, description, category_id) VALUES (42, 'Dear...', 'Blablablablablablablabla', 1);

INSERT INTO picture (id, name, image, category_id) VALUES 
(44, 'Malu', '/assets/feudecamp.png', 1),
(56, 'Bob', '/assets/glycine.jpg', 1),
( 8, 'Jean', '/public/assets/mer.jpg', 1);

INSERT INTO mood_picture (mood_id, picture_id) VALUES (42, 44);

