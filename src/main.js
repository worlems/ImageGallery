import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImg } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  initLightbox,
  refreshLightbox,
} from './js/render-functions';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const btnMore = document.querySelector('.load-more');

let lightbox = null;
let currentPage = 1;
let perPage = 15;
let currentQuery = '';

const hideElement = element => (element.hidden = true);
const showElement = element => (element.hidden = false);

const showWarning = message =>
  iziToast.warning({ message, position: 'topRight' });
const showError = message =>
  iziToast.error({
    message,
    position: 'topRight',
    backgroundColor: '#ef4040',
    messageColor: '#fafafb',
    messageSize: '16px',
    titleColor: '#ffffff',
    maxWidth: '322px',
  });
const showInfo = message => iziToast.info({ message, position: 'topRight' });

const scrollToNextGroup = () => {
  const firstCard = gallery.firstElementChild;
  if (firstCard) {
    const { height: cardHeight } = firstCard.getBoundingClientRect();
    window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
  }
};

async function searchImg(event) {
  event.preventDefault();
  currentQuery = event.target.elements.search.value.trim();
  currentPage = 1;

  if (!currentQuery) {
    showWarning('Warning! The form is empty, please fill searching form.');
    form.reset();
    return;
  }

  clearGallery();
  form.reset();
  hideElement(btnMore);
  showElement(loader);

  try {
    const data = await fetchImg(currentQuery, currentPage);

    if (data.hits.length === 0) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    createGallery(data.hits);
    if (data.hits.length === perPage) {
      showElement(btnMore);
    }

    if (!lightbox) {
      initLightbox();
    } else {
      refreshLightbox();
    }
  } catch (error) {
    showError('Error!');
    console.log('error', error);
  } finally {
    hideElement(loader);
  }
}

async function addMoreImg() {
  currentPage += 1;
  showElement(loader);

  try {
    const data = await fetchImg(currentQuery, currentPage);
    const maxPage = Math.ceil(data.totalHits / perPage);

    createGallery(data.hits);
    refreshLightbox();
    scrollToNextGroup();

    if (currentPage === maxPage) {
      showInfo("We're sorry, but you've reached the end of search results.");
      hideElement(btnMore);
    }
  } catch (error) {
    showError('Error!');
  } finally {
    hideElement(loader);
  }
}

hideElement(loader);
hideElement(btnMore);

form.addEventListener('submit', searchImg);
btnMore.addEventListener('click', addMoreImg);
