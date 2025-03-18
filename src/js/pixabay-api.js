import axios from 'axios';

const apiKey = '49253539-084e8be9ad99f0e2743df86f8';

const pixApi = async data => {
  const searchParams = new URLSearchParams({
    key: apiKey,
    q: data,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  try {
    const response = await axios.get(
      `https://pixabay.com/api/?${searchParams}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default pixApi;
