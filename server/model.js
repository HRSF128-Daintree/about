const db = require('../database');

const getPhotos = (id, callback) => {
  // query to grab all data
  db.Photo.find({ hotelId: id }, callback);
};

module.exports = {
  getPhotos,
};