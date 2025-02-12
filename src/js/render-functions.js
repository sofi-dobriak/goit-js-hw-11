import { refs } from './refs';

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
        <img class="image" src="${webformatURL}" alt="${tags}">
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
      </li>`;
}

function imagesTemplate(images) {
  return images.map(imageTemplate).join('\n');
}

export function renderImages(images) {
  const markup = imagesTemplate(images);
  refs.imagesContainer.insertAdjacentHTML('afterbegin', markup);
}
