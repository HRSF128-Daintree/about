const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writeUsers = (start = 1, end = 2, filenumber = 0) => {
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream(`/Volumes/Elements/users${filenumber}.csv`));
  for (let userId = start; userId <= end; userId++) {
    writer.write({
      userId: userId,
      user: faker.name.findName(),
      userAvatarUrl: faker.image.avatar(),
      locationCity: faker.address.city(),
      locationState: faker.address.stateAbbr(),
      contributions: faker.random.number(400)
    });
    if (userId % 100000 === 0) {
      console.log(userId);
    }
  }
  writer.end();
};

const writeHotels = (start = 1, end = 2, filenumber = 0) => {
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream(`/Volumes/Elements/hotels${filenumber}.csv`));
  for (let hotelId = start; hotelId <= end; hotelId++) {
    writer.write({
      hotelId: hotelId,
      hotelName: faker.company.companyName(),
      hotelCity: faker.address.city(),
      hotelPrice: faker.random.number(1000) + 50,
      numReviews: faker.random.number(1000)
    });
    if (hotelId % 100000 === 0) {
      console.log(hotelId);
    }
  }
  writer.end();
};

const writePhotos = (start = 1, end = 2, filenumber = 0) => {
  const categories = ['Room & Suite', 'Dining', 'Pool & Beach', 'Gym', 'Hotel & Amenities', 'Bathroom', 'Business Center & Event Rooms', 'View from Room'];
  const captions = ['', faker.lorem.words(), faker.lorem.sentence(), faker.lorem.paragraph()];
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream(`/Volumes/Elements/photos${filenumber}.csv`));
  for (let photoId = start; photoId <= end; photoId++) {
    writer.write({
      photoId: photoId,
      imageUrl: faker.image.image(),
      category: categories[faker.random.number(7)],
      datePosted: faker.date.recent(90),
      caption: captions[faker.random.number(3)],
      helpfulVotes: faker.random.number(400),
      hotelId: faker.random.number(9999999) + 1,
      userId: faker.random.number(1999999) + 1
    });
    if (photoId % 100000 === 0) {
      console.log(photoId);
    }
  }
  writer.end();
};

// writeUsers(        1,  2000000, 1);
// writeHotels(       1,  5000000, 1);
// writeHotels( 5000001, 10000000, 2);
// writePhotos(       1,  5000000, 1);
// writePhotos( 5000001, 10000000, 2);
// writePhotos(10000001, 15000000, 3);
// writePhotos(15000001, 20000000, 4);
// writePhotos(20000001, 25000000, 5);
// writePhotos(25000001, 30000000, 6);
// writePhotos(30000001, 35000000, 7);
// writePhotos(35000001, 40000000, 8);
