export function planetTemplate(planet) {
  const {
    id,
    image,
    structure,
    title,
    diameter,
    distance,
    orbital,
    description,
  } = planet;
  return `<li class="planets-item" data-id="${id}">
            <a class="planets-link" href="${structure}">
              <img class="planets-image" src="${image}" alt="${title} structure"/>
            </a>
                <p class="planets-text-info"><strong>ID: </strong>${id}</p>
                <p class="planets-text-info"><strong>Title: </strong>${title}</p>
                <p class="planets-text-info"><strong>Diameter (km): </strong>${diameter}</p>
                <p class="planets-text-info"><strong>Distance from Sun (km): </strong>${distance}</p>
                <p class="planets-text-info"><strong>Orbital period (days): </strong>${orbital}</p>
                <p class="planets-text-info"><strong>Description: </strong>${description}</p>
        </li>`;
}

export function plantesTemplate(planets) {
  return planets.map(planetTemplate).join('');
}
