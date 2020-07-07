const express = require('express');
const app = express();
const port = 3003;
const path = require('path');
const controller = require('./controller.js');

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// GET request
app.get('/api/photos/:hotelId', controller.getPhotos);

app.get('/:hotelId', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(port, () => console.log(`SERVER ON: listening at http://localhost:${port}`));