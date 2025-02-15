import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
});

export function getAllPlanets() {
  return instance.get('/planets').then(res => res.data);
}

export function getOnePlanet(id) {
  return instance.get(`/planets/${id}`).then(res => res.data);
}

export function createPlanet(planet) {
  return instance.post(`/planets`, planet).then(res => res.data);
}

export function updatePlanet(id, planet) {
  return instance.patch(`/planets/${id}`, planet).then(res => res.data);
}

export function resetPlanet(id, planet) {
  return instance.put(`/planets/${id}`, planet).then(res => res.data);
}

export function deletePlanet(id) {
  return instance.delete(`/planets/${id}`).then(res => res.data);
}
