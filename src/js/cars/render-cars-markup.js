export function carTemplate(car) {
  const { id, image, brand, model, color } = car;
  return `  <li class="car-container" data-id="${id}">
                <img class="car-img" src="${image}" alt="${brand}">
                <p class="car-text-info"><strong>ID:</strong>  ${id}</p>
                <p class="car-text-info"><strong>Brand:</strong>  ${brand}</p>
                <p class="car-text-info"><strong>Model:</strong> ${model}</p>
                <p class="car-text-info"><strong>Color:</strong> ${color}</p>
            </li>`;
}

export function carsTemplate(cars) {
  return cars.map(carTemplate).join('');
}
