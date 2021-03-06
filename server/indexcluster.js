// const newrelic = require('newrelic');
const express = require('express');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const path = require('path');
const controller = require('./controller.js');

if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  const app = express();
  const port = 3003;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/', express.static(path.join(__dirname, '../client/dist')));
  app.get('/:hotelId', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });

  app.get('/api/photos/:hotelId', controller.getPhotos);
  app.post('/api/photos/:hotelId', controller.addPhotos);
  app.put('/api/photos/:hotelId', controller.updatePhotos);
  app.delete('/api/photos/:hotelId', controller.deletePhotos);

  app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
}
