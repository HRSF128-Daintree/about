const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

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
      hotelName: faker.company.companyName(),
      hotelCity: faker.address.city(),
      hotelPrice: faker.random.number(1000) + 50,
      numReviews: faker.random.number(1000),
      userId: faker.random.number(1999999) + 1
      user: faker.name.findName(),
      userAvatarUrl: faker.image.avatar(),
      locationCity: faker.address.city(),
      locationState: faker.address.stateAbbr(),
      contributions: faker.random.number(400)
    });
    if (photoId % 100000 === 0) {
      console.log(photoId);
    }
  }
  writer.end();
};

