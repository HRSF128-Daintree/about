CREATE KEYSPACE IF NOT EXISTS daintree
WITH REPLICATION = {
  'class' : 'NetworkTopologyStrategy',
  'datacenter1' : 3
};

USE daintree;

CREATE TABLE photos (
  photoId         UUID,
  imageUrl        text,
  category        text,
  datePosted      text,
  caption         text,
  helpfulVotes    int,
  hotelId         int,
  hotelName       text,
  hotelCity       text,
  hotelPrice      int,
  numReviews      int,
  userId          int,
  user            text,
  userAvatarUrl   text,
  locationCity    text,
  locationState   text,
  contributions   int,
  PRIMARY KEY (hotelId, category, photoId)
);
