import { carTemplate, carsTemplate } from './render-cars-markup.js';
import {
  getAllCars,
  getOneCar,
  createCar,
  updateCar,
  resetCar,
  deleteCar,
} from './cars-API';

const refs = {
  createForm: document.querySelector('.js-create-form'),
  updateForm: document.querySelector('.js-update-form'),
  resetForm: document.querySelector('.js-reset-form'),
  deleteForm: document.querySelector('.js-delete-form'),
  carsList: document.querySelector('.js-car-list-container'),
};

refs.createForm.addEventListener('submit', handleCreateCar);
refs.updateForm.addEventListener('submit', handleUpdateCar);
refs.resetForm.addEventListener('submit', handleResetCar);
refs.deleteForm.addEventListener('submit', handleDeleteCar);

function handleCreateCar(e) {
  e.preventDefault();

  const carData = {
    image: e.target.elements.image.value.trim(),
    brand: e.target.elements.brand.value.trim(),
    model: e.target.elements.model.value.trim(),
    color: e.target.elements.color.value.trim(),
  };

  createCar(carData).then(newCar => {
    const markup = carTemplate(newCar);
    refs.carsList.insertAdjacentHTML('afterbegin', markup);
  });

  e.target.reset();
}

function handleUpdateCar(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const carID = e.target.elements.id.value;
  const carData = {};

  for (const [key, value] of formData.entries()) {
    if (!value.trim()) {
      continue;
    }

    carData[key] = value;
  }

  updateCar(carID, carData).then(newCar => {
    const markup = carTemplate(newCar);
    const oldCar = document.querySelector(`[data-id="${carID}"]`);

    oldCar.insertAdjacentHTML('beforebegin', markup);
    oldCar.remove();
  });

  e.target.reset();
}

function handleResetCar(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const carID = e.target.elements.id.value;
  const carData = {};

  for (const [key, value] of formData.entries()) {
    carData[key] = value;
  }

  resetCar(carID, carData).then(newCar => {
    const markup = carTemplate(newCar);
    const oldCar = document.querySelector(`[data-id="${carID}"]`);

    oldCar.insertAdjacentHTML('beforebegin', markup);
    oldCar.remove();
  });

  e.target.reset();
}

function handleDeleteCar(e) {
  e.preventDefault();

  const carID = e.target.elements.id.value.trim();

  deleteCar(carID).then(() => {
    const oldCar = document.querySelector(`[data-id="${carID}"]`);
    oldCar.remove();
  });

  e.target.reset();
}

getAllCars().then(cars => {
  const markup = carsTemplate(cars);
  refs.carsList.innerHTML = markup;
});
