const db = require('../database');

const getPhotos = (id, callback) => {
  db.Photo.find({ hotelId: id }, callback);
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
