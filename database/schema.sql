/*  Execute this file from the root directory in the command line by typing:
 *    mysql -u root -p < database/schema.sql
 *  to create the database and the tables. */
DROP DATABASE IF EXISTS daintree;
CREATE DATABASE daintree;

USE daintree;

CREATE TABLE hotels (
  hotelId         INT AUTO_INCREMENT PRIMARY KEY,
  hotelName       VARCHAR(255) NOT NULL,
  hotelCity       VARCHAR(255) NOT NULL,
  hotelPrice      INT NOT NULL,
  numReviews      INT
);

CREATE TABLE users (
  userId          INT AUTO_INCREMENT PRIMARY KEY,
  user            VARCHAR(255) NOT NULL,
  userAvatarUrl   VARCHAR(255),
  locationCity    VARCHAR(255),
  locationState   VARCHAR(255),
  contributions   INT
);

CREATE TABLE photos (
  photoId         INT AUTO_INCREMENT PRIMARY KEY,
  imageUrl        VARCHAR(255) NOT NULL,
  category        VARCHAR(255) NOT NULL,
  datePosted      VARCHAR(255),
  caption         VARCHAR(255),
  helpfulVotes    INT,
  hotelId         INT NOT NULL,
  userId          INT NOT NULL,

  FOREIGN KEY (hotelId)
    REFERENCES hotels (hotelId),

  FOREIGN KEY (userId)
    REFERENCES users (userId)
);

-- LOAD DATA LOCAL INFILE '/Volumes/Elements/users1.csv' INTO TABLE users FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;
-- LOAD DATA LOCAL INFILE '/Volumes/Elements/hotels1.csv' INTO TABLE hotels FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;
-- LOAD DATA LOCAL INFILE '/Volumes/Elements/photos1.csv' INTO TABLE photos FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;