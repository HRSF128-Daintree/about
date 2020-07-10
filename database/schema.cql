CREATE KEYSPACE IF NOT EXISTS photos
WITH REPLICATION = {
  'class' : 'NetworkTopologyStrategy',
  'datacenter1' : 3
};

USE photos;

CREATE TABLE hotels (
  hotelId         UUID,
  hotelName       text,
  hotelCity       text,
  hotelPrice      int,
  numReviews      int,
  PRIMARY KEY (hotelId)
);

CREATE TABLE users (
  userId          UUID,
  user            text,
  userAvatarUrl   text,
  PRIMARY KEY (userId)
);

CREATE TABLE rooms (
  roomId          UUID,
  imageUrl        text,
  caption         text,
  category        text,
  datePosted      text,
  helpfulVotes    int,
  location        text,
  contributions   int,
  hotelId         int,
  userId          int,
  PRIMARY KEY (roomId)
);

CREATE TABLE dinings (
  diningId        UUID,
  imageUrl        text,
  caption         text,
  category        text,
  datePosted      text,
  helpfulVotes    int,
  location        text,
  contributions   int,
  hotelId         int,
  userId          int,
  PRIMARY KEY (diningId)
);

CREATE TABLE pools (
  poolId          UUID,
  imageUrl        text,
  caption         text,
  category        text,
  datePosted      text,
  helpfulVotes    int,
  location        text,
  contributions   int,
  hotelId         int,
  userId          int,
  PRIMARY KEY (poolId)
);

CREATE TABLE amenities (
  amenityId       UUID,
  imageUrl        text,
  caption         text,
  category        text,
  datePosted      text,
  helpfulVotes    int,
  location        text,
  contributions   int,
  hotelId         int,
  userId          int,
  PRIMARY KEY (amenityId)
);

CREATE TABLE bathrooms (
  bathroomId      UUID,
  imageUrl        text,
  caption         text,
  category        text,
  datePosted      text,
  helpfulVotes    int,
  location        text,
  contributions   int,
  hotelId         int,
  userId          int,
  PRIMARY KEY (bathroomId)
);

CREATE TABLE eventrooms (
  eventroomId     UUID,
  imageUrl        text,
  caption         text,
  category        text,
  datePosted      text,
  helpfulVotes    int,
  location        text,
  contributions   int,
  hotelId         int,
  userId          int,
  PRIMARY KEY (eventroomId)
);

CREATE TABLE roomviews (
  roomviewId      UUID,
  imageUrl        text,
  caption         text,
  category        text,
  datePosted      text,
  helpfulVotes    int,
  location        text,
  contributions   int,
  hotelId         int,
  userId          int,
  PRIMARY KEY (roomviewId)
);