import FetchApiService from './api-service.js';
import galleryCards from './gallery.hbs';
import styles from './styles.css';

const galleryBlock = document.querySelector('.gallery-block');
const searchForm = document.querySelector('.search-form');
const loadBtn = document.querySelector('.load-more');

const newApiService = new FetchApiService();

searchForm.addEventListener('submit', onSearch);
loadBtn.addEventListener('click', onLoadMore);

function onSearch (e) {
  e.preventDefault();
  newApiService.resetPage();
  newApiService.query = e.currentTarget.elements.query.value;
  newApiService.fetchApiService().then(renderGalleryCard);
}


function onLoadMore() {
  newApiService.fetchApiService().then(renderGalleryCard);
}

function renderGalleryCard (pictures) {
  galleryBlock.insertAdjacentHTML('beforeend',galleryCards(pictures))
}
