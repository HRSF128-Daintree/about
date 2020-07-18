import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 1600 },
    { duration: '1m', target: 1600 },
  ],
};

export default function() {
  const hotelId = Math.floor(Math.random() * 99999999) + 1;
  http.get(`http://localhost:3003/api/photos/${hotelId}`);
  sleep(1);
}