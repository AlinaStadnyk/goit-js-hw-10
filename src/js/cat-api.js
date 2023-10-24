import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_OH38tnlPLMQEzU3fEzOtEUu9Feqs6ZHK2ib6ycok4WiHY6BtKweledSu1zeuTNQdnpm install slim-select';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
function fetchBreeds() {
  return axios.get('/breeds').then(response => {
    console.log(response.data);

    return response.data;
  });
}

function fetchCatByBreed(breedId) {
  return axios.get('.//images/search?breed_ids=${breedId}').then(response => {
    return response.data;
    console.log(reesponse.data);
  });
}
export { fetchBreeds, fetchCatByBreed };
