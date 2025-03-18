import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.card-link', {
  inlineStyles: false,
  captionsData: 'alt',
  captionDelay: 250,
  disableScroll: true,
});

const renderImages = (resultData, list) => {
  const murkup = resultData.map(element => {
    return `<li class="card">
                <a class="card-link" href="${element.largeImageURL}">
                    <img  class="card-image" src="${element.webformatURL}" alt="${element.tags}" />
                </a>
                <div class="main-content">
                    <ul class="card-list">
                        <li class="card-list-li">
                            <h3>
                                likes
                            </h3>
                            <p>${element.likes}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                views
                            </h3>
                            <p>${element.views}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                comments
                            </h3>
                            <p>${element.comments}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                downloads
                            </h3>
                            <p>${element.downloads}</p>
                        </li>
                    </ul>
                </div>
            </li>`;
  });

  list.insertAdjacentHTML('beforeend', murkup.join(''));

  lightbox.refresh();
};

export default renderImages;
