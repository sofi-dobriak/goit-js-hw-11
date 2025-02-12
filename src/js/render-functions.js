import { refs } from './refs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function imageTemplate(image) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = image;

  return `
        <li class="image-item">
            <a href=${largeImageURL}>
                <img class="image" src="${webformatURL}" alt="${cleanTags(
    tags
  )}">
                <ul class="stat-list">
                    <li class="stat-item">
                        <h3 class="stat-title">Likes</h3>
                        <p class="stat-description">${likes}</p>
                    </li>
                    <li class="stat-item">
                        <h3 class="stat-title">Views</h3>
                        <p class="stat-description">${views}</p>
                    </li>
                    <li class="stat-item">
                        <h3 class="stat-title">Comments</h3>
                        <p class="stat-description">${comments}</p>
                    </li>
                    <li class="stat-item">
                        <h3 class="stat-title">Downloads</h3>
                        <p class="stat-description">${downloads}</p>
                    </li>
                </ul>
            </a>
      </li>
      `;
}

function cleanTags(tags) {
  return [...new Set(tags.split(', '))].join(', ');
}

function imagesTemplate(images) {
  return images.map(imageTemplate).join('\n');
}

const largeImages = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});

export function renderImages(images) {
  showLoader();

  const markup = imagesTemplate(images);
  refs.gallery.innerHTML = markup;
  largeImages.refresh();

  hideLoader();
}

export function showLoader() {
  refs.loader.classList.remove('hidden');
  refs.gallery.classList.add('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
  refs.gallery.classList.remove('hidden');
}
