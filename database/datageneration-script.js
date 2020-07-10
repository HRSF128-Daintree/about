const fs = require('fs');
const faker = require('faker');

const writeHotels = (end = 2) => {
  const hotelHeaders = ['hotelId', 'hotelName', 'hotelCity', 'hotelPrice', 'numReviews'];
  fs.writeFileSync('./data/hotels.csv', hotelHeaders.join(',') + '\n');
  for (let hotelId = 1; hotelId <= end; hotelId++) {
    const hotel = [hotelId, faker.company.companyName(), faker.address.city(), faker.random.number(1000 + 50), faker.random.number(1000)];
    fs.appendFileSync('./data/hotels.csv', hotel.join(',') + '\n');
  }
};

const writeUsers = (end = 2) => {
  const userHeaders = ['userId', 'user', 'userAvatarUrl', 'locationCity', 'locationState', 'contributions'];
  fs.writeFileSync('./data/users.csv', userHeaders.join(',') + '\n');
  for (let userId = 1; userId <= end; userId++) {
    const user = [userId, faker.name.findName(), faker.image.avatar(), faker.address.city(), faker.address.stateAbbr(), faker.random.number(400)];
    fs.appendFileSync('./data/users.csv', user.join(',') + '\n');
  }
};

const writePhotos = (start = 1, end = 2, filenumber=0) => {
  const photoHeaders = ['photoId', 'imageUrl', 'category', 'datePosted', 'caption', 'helpfulVotes', 'hotelId', 'userId'];
  fs.writeFileSync(`./data/photos${filenumber}.csv`, photoHeaders.join(',') + '\n');
  for (let photoId = start; photoId <= end; photoId++) {
    const categories = ['Room & Suite', 'Dining', 'Pool & Beach', 'Gym', 'Hotel & Amenities', 'Bathroom', 'Business Center & Event Rooms', 'View from Room'];
    const captions = ['', faker.lorem.words(), faker.lorem.sentence(), faker.lorem.paragraph()];
    const photo = [photoId, faker.image.image(), categories[faker.random.number(7)], faker.date.recent(90), captions[faker.random.number(3)], faker.random.number(400), faker.random.number(9999) + 1, faker.random.number(9999) + 1];
    fs.appendFileSync(`./data/photos${filenumber}.csv`, photo.join(',') + '\n');
    if (photoId % 100000 === 0) {
      console.log(photoId);
    }
  }
};

// writeHotels(10000);
// writeUsers(10000);
// writePhotos(1, 5000000, 1);
// writePhotos(5000001, 10000000, 2);
