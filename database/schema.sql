/*  Execute this file from the command line by typing:
 *    mysql -u root -p < database/schema.sql
 *  to create the database and the tables. */

CREATE DATABASE photos;

USE photos;

CREATE TABLE hotels (
  hotelId         INT AUTO_INCREMENT PRIMARY KEY,
  hotelName       VARCHAR(255),
  hotelCity       VARCHAR(255),
  hotelPrice      INT,
  numReviews      INT
);

CREATE TABLE users (
  userId          INT AUTO_INCREMENT PRIMARY KEY,
  user            VARCHAR(255),
  userAvatarUrl   VARCHAR(255)
);

CREATE TABLE rooms (
  roomId          INT AUTO_INCREMENT PRIMARY KEY,
  imageUrl        VARCHAR(255),
  caption         VARCHAR(255),
  category        VARCHAR(255),
  datePosted      VARCHAR(255),
  helpfulVotes    INT,
  location        VARCHAR(255),
  contributions   INT,
  hotelId         INT,
  userId          INT
);

CREATE TABLE dinings (
  diningId        INT AUTO_INCREMENT PRIMARY KEY,
  imageUrl        VARCHAR(255),
  caption         VARCHAR(255),
  category        VARCHAR(255),
  datePosted      VARCHAR(255),
  helpfulVotes    INT,
  location        VARCHAR(255),
  contributions   INT,
  hotelId         INT,
  userId          INT
);

CREATE TABLE pools (
  poolId          INT AUTO_INCREMENT PRIMARY KEY,
  imageUrl        VARCHAR(255),
  caption         VARCHAR(255),
  category        VARCHAR(255),
  datePosted      VARCHAR(255),
  helpfulVotes    INT,
  location        VARCHAR(255),
  contributions   INT,
  hotelId         INT,
  userId          INT
);

CREATE TABLE gyms (
  gymId          INT AUTO_INCREMENT PRIMARY KEY,
  imageUrl        VARCHAR(255),
  caption         VARCHAR(255),
  category        VARCHAR(255),
  datePosted      VARCHAR(255),
  helpfulVotes    INT,
  location        VARCHAR(255),
  contributions   INT,
  hotelId         INT,
  userId          INT
);

CREATE TABLE amenities (
  amenityId      INT AUTO_INCREMENT PRIMARY KEY,
  imageUrl        VARCHAR(255),
  caption         VARCHAR(255),
  category        VARCHAR(255),
  datePosted      VARCHAR(255),
  helpfulVotes    INT,
  location        VARCHAR(255),
  contributions   INT,
  hotelId         INT,
  userId          INT
);

CREATE TABLE bathrooms (
  bathroomId      INT AUTO_INCREMENT PRIMARY KEY,
  imageUrl        VARCHAR(255),
  caption         VARCHAR(255),
  category        VARCHAR(255),
  datePosted      VARCHAR(255),
  helpfulVotes    INT,
  location        VARCHAR(255),
  contributions   INT,
  hotelId         INT,
  userId          INT
);

CREATE TABLE eventrooms (
  eventroomId     INT AUTO_INCREMENT PRIMARY KEY,
  imageUrl        VARCHAR(255),
  caption         VARCHAR(255),
  category        VARCHAR(255),
  datePosted      VARCHAR(255),
  helpfulVotes    INT,
  location        VARCHAR(255),
  contributions   INT,
  hotelId         INT,
  userId          INT
);

CREATE TABLE roomviews (
  roomviewId      INT AUTO_INCREMENT PRIMARY KEY,
  imageUrl        VARCHAR(255),
  caption         VARCHAR(255),
  category        VARCHAR(255),
  datePosted      VARCHAR(255),
  helpfulVotes    INT,
  location        VARCHAR(255),
  contributions   INT,
  hotelId         INT,
  userId          INT
);

-- Relate photos to hotels
ALTER TABLE rooms ADD FOREIGN KEY (hotelId) REFERENCES hotels (hotelId);
ALTER TABLE dinings ADD FOREIGN KEY (hotelId) REFERENCES hotels (hotelId);
ALTER TABLE pools ADD FOREIGN KEY (hotelId) REFERENCES hotels (hotelId);
ALTER TABLE gyms ADD FOREIGN KEY (hotelId) REFERENCES hotels (hotelId);
ALTER TABLE amenities ADD FOREIGN KEY (hotelId) REFERENCES hotels (hotelId);
ALTER TABLE bathrooms ADD FOREIGN KEY (hotelId) REFERENCES hotels (hotelId);
ALTER TABLE eventrooms ADD FOREIGN KEY (hotelId) REFERENCES hotels (hotelId);
ALTER TABLE roomviews ADD FOREIGN KEY (hotelId) REFERENCES hotels (hotelId);

-- Relate photos to users
ALTER TABLE rooms ADD FOREIGN KEY (userId) REFERENCES users (userId);
ALTER TABLE dinings ADD FOREIGN KEY (userId) REFERENCES users (userId);
ALTER TABLE pools ADD FOREIGN KEY (userId) REFERENCES users (userId);
ALTER TABLE gyms ADD FOREIGN KEY (userId) REFERENCES users (userId);
ALTER TABLE amenities ADD FOREIGN KEY (userId) REFERENCES users (userId);
ALTER TABLE bathrooms ADD FOREIGN KEY (userId) REFERENCES users (userId);
ALTER TABLE eventrooms ADD FOREIGN KEY (userId) REFERENCES users (userId);
ALTER TABLE roomviews ADD FOREIGN KEY (userId) REFERENCES users (userId);

