import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const MY_KEY = '39058445-583a5edd643a4562ace127962';

export const fetchImagesByCategories = async (name, page) => {
  axios.defaults.params = {
    key: MY_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page,
  };
  const { data } = await axios.get(`${BASE_URL}?q=${name}`);
  return data;
};