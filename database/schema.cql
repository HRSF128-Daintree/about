CREATE KEYSPACE IF NOT EXISTS daintree
WITH REPLICATION = {
  'class' : 'NetworkTopologyStrategy',
  'datacenter1' : 3
};

USE daintree;

CREATE TABLE photos (
  photoid         int,
  imageurl        text,
  category        text,
  dateposted      text,
  caption         text,
  helpfulvotes    int,
  hotelid         int,
  hotelname       text,
  hotelcity       text,
  hotelprice      int,
  numreviews      int,
  userid          int,
  user            text,
  useravatarurl   text,
  locationcity    text,
  locationstate   text,
  contributions   int,
  PRIMARY KEY (hotelId, category, photoId)
);
