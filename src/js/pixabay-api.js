import axios from 'axios';

const API_KEY = '49253539-084e8be9ad99f0e2743df86f8';

export const fetchImg = async (query, page = 1) => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  });

  const response = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${params}`
  );
  return response.data;
};
