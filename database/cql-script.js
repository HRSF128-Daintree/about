const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writePhotos = (start = 1, end = 2, filenumber = 0) => {
  const categories = ['Room & Suite', 'Dining', 'Pool & Beach', 'Gym', 'Hotel & Amenities', 'Bathroom', 'Business Center & Event Rooms', 'View from Room'];
  const captions = ['', faker.lorem.words(), faker.lorem.sentence(), faker.lorem.paragraph()];
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream(`/Volumes/Elements/cphotos${filenumber}.csv`));
  for (let photoId = start; photoId <= end; photoId++) {
    writer.write({
      hotelid: faker.random.number(9999999) + 1,
      category: categories[faker.random.number(7)],
      photoid: photoId,
      caption: captions[faker.random.number(3)],
      contributions: faker.random.number(400),
      dateposted: faker.date.recent(90),
      helpfulvotes: faker.random.number(400),
      hotelcity: faker.address.city(),
      hotelname: faker.company.companyName(),
      hotelprice: faker.random.number(1000) + 50,
      imageurl: faker.image.image(),
      locationcity: faker.address.city(),
      locationstate: faker.address.stateAbbr(),
      numreviews: faker.random.number(1000),
      user: faker.name.findName(),
      useravatarurl: faker.image.avatar(),
      userid: faker.random.number(1999999) + 1,
    });
    if (photoId % 100000 === 0) {
      console.log(photoId);
    }
  }
  writer.end();
};

// writePhotos(1, 10, 0);
// writePhotos(       1,  5000000, 1);
// writePhotos( 5000001, 10000000, 2);
// writePhotos(10000001, 15000000, 3);
// writePhotos(15000001, 20000000, 4);
// writePhotos(20000001, 25000000, 5);
// writePhotos(25000001, 30000000, 6);
// writePhotos(30000001, 35000000, 7);
// writePhotos(35000001, 40000000, 8);