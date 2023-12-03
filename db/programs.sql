DROP DATABASE IF EXISTS member_db;
CREATE DATABASE member_db;

USE member_db;

CREATE TABLE member(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  member_name VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  user_name VARCHAR(30) NOT NULL,
  user_pass VARCHAR(30) NOT NULL
);

CREATE TABLE class(
  id INT NOT NULL,
  class_name VARCHAR(30) NOT NULL,
  member_id INT NOT NULL,
  FOREIGN KEY (member_id) REFERENCES member (id)
);

CREATE TABLE enrollment(
  id INT NOT NULL,
  member_id INT NOT NULL
  FOREIGN KEY (member_id) REFERENCES member (id)
  class_id INT NOT NULL,
  FOREIGN KEY (class_id) REFERENCES class (id)
);


/* SELECT * FROM enrollment
JOIN member mem ON ( mc.member_id = mem.id)
JOIN class cls ON ( mc.class_id = cls.id)
WHERE <….> */