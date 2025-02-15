import { planetTemplate, plantesTemplate } from './planets-render';
import {
  getAllPlanets,
  createPlanet,
  updatePlanet,
  resetPlanet,
  deletePlanet,
} from './planets-API';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  createForm: document.querySelector('.js-create-form'),
  updateForm: document.querySelector('.js-update-form'),
  resetForm: document.querySelector('.js-reset-form'),
  deleteForm: document.querySelector('.js-delete-form'),
  planetsList: document.querySelector('.js-planets-list'),
};

refs.createForm.addEventListener('submit', handleCreatePlanet);
refs.updateForm.addEventListener('submit', handleUpdatePlanet);
refs.resetForm.addEventListener('submit', handleResetPlanet);
refs.deleteForm.addEventListener('submit', handleDeletePlanet);

function initSimpleLightbox() {
  return new SimpleLightbox('.planets-list .planets-link', {
    captionsData: 'alt',
    sourceAttr: 'href',
    className: 'my-custom-lightbox',
  });
}

function handleCreatePlanet(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const planetData = {};

  for (const [key, value] of formData.entries()) {
    planetData[key] = value;
  }

  createPlanet(planetData)
    .then(newPlanet => {
      const markup = planetTemplate(newPlanet);
      refs.planetsList.insertAdjacentHTML('afterbegin', markup);
      initSimpleLightbox();
    })
    .catch(err => {
      console.log(err);
    });

  e.target.reset();
}

function handleUpdatePlanet(e) {
  e.preventDefault();

  const planetID = e.target.elements.id.value;
  const formData = new FormData(e.target);
  const planetData = {};

  for (const [key, value] of formData.entries()) {
    if (!value.trim()) {
      continue;
    }

    planetData[key] = value;
  }

  updatePlanet(planetID, planetData)
    .then(newPlanet => {
      const markup = planetTemplate(newPlanet);

      const oldPlanet = document.querySelector(`[data-id="${planetID}"]`);
      oldPlanet.insertAdjacentHTML('beforebegin', markup);
      oldPlanet.remove();

      initSimpleLightbox();
    })
    .catch(err => {
      console.log(err);
    });

  e.target.reset();
}

function handleResetPlanet(e) {
  e.preventDefault();

  e.target.reset();
}

function handleDeletePlanet(e) {
  e.preventDefault();

  const planetID = e.target.elements.id.value;

  deletePlanet(planetID)
    .then(() => {
      const oldPlanet = document.querySelector(`[data-id="${planetID}"]`);
      oldPlanet.remove();
    })
    .catch(err => {
      console.log(err);
    });

  e.target.reset();
}

getAllPlanets()
  .then(planets => {
    const markup = plantesTemplate(planets);
    refs.planetsList.innerHTML = markup;
    initSimpleLightbox();
  })
  .catch(err => {
    console.log(err);
  });
