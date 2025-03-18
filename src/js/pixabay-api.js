import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImg = async function (dataName, currentPage) {
  const { data } = await axios.get('', {
    params: {
      key: '49253539-084e8be9ad99f0e2743df86f8',
      q: dataName,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: currentPage,
    },
  });
  return data;
};
