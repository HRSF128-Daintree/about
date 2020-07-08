const model = require('./model.js');

const getPhotos = (req, res) => {
  const id = req.params.hotelId || '1';

  model.getPhotos(id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

const addPhotos = (req, res) => {
  model.addPhotos(req.body, (error, data) => {
    if (error) {
      res.status(404).send(error);
    } else {
      res.status(201).send(data);
    }
  });
}

const updatePhotos = (req, res) => {
  const id = req.params.hotelId || '1';

  model.updatePhotos(id, req.body, (error, data) => {
    if (error) {
      res.status(404).send(error);
    } else {
      res.status(204).send(data);
    }
  });
}

const deletePhotos = (req, res) => {
  const id = req.params.hotelId || '1';

  model.deletePhotos(id, (error, data) => {
    if (error) {
      res.status(404).send(error);
    } else {
      res.status(204).send(data);
    }
  });
}

module.exports = {
  getPhotos,
  addPhotos,
  updatePhotos,
  deletePhotos,
};
