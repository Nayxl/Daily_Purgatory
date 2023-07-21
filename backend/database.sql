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
(1, 'Welcome'), (2, 'Bienvenue');

INSERT INTO note (title, description, category_id) VALUES
('Welcome', 'Il était une fois.....', 1);

INSERT INTO mood (id, title, description, category_id) VALUES 
(42, 'Dear...', 'Autour du feu, chacun racontait ses histoires, des récits d\'aventures vécues et d\'expériences incroyables. Les flammes dansantes illuminaient leurs visages éclairés par des sourires étincelants. Le crépitement du feu ajoutait une ambiance chaleureuse à leur petit campement.', 1),
(23, 'Hello Charlie', 'Il était une fois un magnifique jardin rempli de fleurs de toutes les couleurs et de toutes les formes. Chaque fleur était unique en son genre, avec son propre parfum enivrant et sa beauté éclatante. Les roses rouges s\'épanouissaient avec élégance, les tournesols tournaient leurs visages vers le soleil, et les délicates marguerites dansaient doucement avec le vent. Au cœur de ce jardin vivait une petite abeille du nom de Bella. Bella était une abeille butineuse et travailleuse, toujours occupée à récolter le nectar des fleurs pour le ramener à sa ruche. Elle adorait explorer chaque recoin du jardin, découvrir de nouvelles variétés de fleurs et se laisser enivrer par leurs doux parfums. Un jour, alors que Bella butinait une belle fleur violette, elle remarqua une petite fleur solitaire cachée derrière les buissons. C\'était une fleur timide et modeste, ses pétales étaient délicats et sa couleur était d\'un doux rose pâle. Bella s\'approcha de la fleur avec curiosité et lui dit doucement : "Bonjour, jolie fleur. Pourquoi es-tu si cachée ? Tu es si belle, tu devrais te montrer au monde."', 1),
(12, 'Pas les mots', 'Ses yeux pétillaient d\'excitation alors qu\'elle imaginait les vagues, le sable chaud et l\'horizon sans fin. Le voyage jusqu\'à la côte fut long, mais chaque minute en valait la peine pour Emma. Enfin, après des heures de route, la famille arriva sur le rivage. Emma sortit de la voiture et resta figée, incapable de détourner le regard de la vue époustouflante qui s\'offrait à elle. Les vagues s\'étendaient à perte de vue, scintillant sous les rayons du soleil. Le bruit apaisant des vagues qui se brisaient sur le rivage remplissait ses oreilles. Emma pouvait sentir le parfum salé de l\'océan dans l\'air, ce qui la fit sourire d\'extase.', 1);

INSERT INTO picture (id, name, image, category_id) VALUES 
(44, 'Le camping', '/assets/feudecamp.png', 1),
(56, 'Magnifique', '/assets/glycine.jpg', 1),
( 8, 'Whaou', '/assets/mer.jpg', 1);

INSERT INTO mood_picture (mood_id, picture_id) VALUES (42, 44), (23, 8), (12,56);
