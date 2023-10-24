import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_OH38tnlPLMQEzU3fEzOtEUu9Feqs6ZHK2ib6ycok4WiHY6BtKweledSu1zeuTNQdnpm install slim-select';

export function fetchBreeds() {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  axios.defaults.headers.common['x-api-key'] =
    'live_OH38tnlPLMQEzU3fEzOtEUu9Feqs6ZHK2ib6ycok4WiHY6BtKweledSu1zeuTNQdnpm install slim-select';
  console.log(BASE_URL);
  return fetch(`${BASE_URL}/breeds`).then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json;
  });
}
