import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { refs } from './js/refs';
import searchImages from './js/pixabay-api';
import { renderImages, showLoader, hideLoader } from './js/render-functions';

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const userValue = e.target.elements['search-images'].value.trim();

  showLoader();
  refs.gallery.innerHTML = '';

  searchImages(userValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        hideLoader();
      } else {
        renderImages(data.hits);
        hideLoader();
      }
    })
    .catch(error => {
      console.log(error);
    });

  e.target.reset();
});
