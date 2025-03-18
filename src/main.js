import pixApi from './js/pixabay-api.js';
import renderImages from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const input = document.querySelector('input[data-search]');
const loader = document.querySelector('.loader-div');
const list = document.querySelector('.gallery');

form.addEventListener('submit', e => {
  e.preventDefault();
  loader.style.visibility = 'visible';
  const search = input.value.trim();
  list.innerHTML = '';
  if (search === '') {
    iziToast.error({
      message: 'The input should not be empty',
    });
    return;
  }
  pixApi(search)
    .then(data => {
      const result = data.hits;

      if (result.length !== 0) {
        renderImages(result, list);
      } else {
        iziToast.show({
          title: '',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: 'white',
          backgroundColor: '#E25757',
          position: 'topRight',
        });
      }
    })
    .catch(error => {
      console.error(error.message);
      iziToast.show({
        title: '',
        message: 'Sorry, check your internet connection!',
        messageColor: 'white',
        backgroundColor: '#E25757',
        position: 'topRight',
        timeout: 5000,
      });
    })
    .finally(() => {
      loader.style.visibility = 'hidden';
      e.target.reset();
    });
});
