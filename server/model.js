const Promise = require('bluebird');
const db = require('../database');
const query = Promise.promisify(db.query).bind(db);

const getPhotos = async (id, callback) => {
  const rows = await query(`SELECT photos.photoId, photos.imageUrl, photos.category, photos.datePosted, photos.caption, photos.helpfulVotes, hotels.hotelId, hotels.hotelName, hotels.hotelCity, hotels.hotelPrice, hotels.numReviews, users.userId, users.user, users.userAvatarUrl, users.locationCity, users.locationState, users.contributions FROM photos INNER JOIN hotels ON photos.hotelId = hotels.hotelId INNER JOIN users ON photos.userId = users.userId WHERE photos.hotelId = ${id}`);
  const photos = rows;
  photos.forEach(photo => {
    photo.location = `${photo.locationCity}, ${photo.locationState}`;
  });
  const hotel = {};
  if (rows.length > 0) {
    const photo = rows[0];
    hotel.hotelId = photo.hotelId;
    hotel.hotelName = photo.hotelName;
    hotel.hotelCity = photo.hotelCity;
    hotel.hotelPrice = photo.hotelPrice;
    hotel.numReviews = photo.numReviews;
    ['Room & Suite', 'Dining', 'Pool & Beach', 'Gym', 'Hotel & Amenities', 'Bathroom', 'Business Center & Event Rooms', 'View from Room'];
    hotel.roomAlbum = photos.filter(photo => photo.category === 'Room & Suite');
    hotel.diningAlbum = photos.filter(photo => photo.category === 'Dining');
    hotel.poolAlbum = photos.filter(photo => photo.category === 'Pool & Beach');
    hotel.gymAlbum = photos.filter(photo => photo.category === 'Gym');
    hotel.amenitiesAlbum = photos.filter(photo => photo.category === 'Hotel & Amenities');
    hotel.bathroomAlbum = photos.filter(photo => photo.category === 'Bathroom');
    hotel.eventRoomAlbum = photos.filter(photo => photo.category === 'Business Center & Event Rooms');
    hotel.roomViewAlbum = photos.filter(photo => photo.category === 'View from Room');
  }
  callback(null, [hotel]);
};

const addPhotos = (document, callback) => {
  db.Photo.create(document, callback);
};

const updatePhotos = (id, update, callback) => {
  db.Photo.updateOne({ hotelId: id }, update, callback);
};

const deletePhotos = (id, callback) => {
  db.Photo.deleteMany({ hotelId: id }, callback);
};

module.exports = {
  getPhotos,
  addPhotos,
  updatePhotos,
  deletePhotos,
};
