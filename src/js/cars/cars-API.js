import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

export function getAllCars() {
  return instance.get('/cars').then(res => res.data);
}

export function getOneCar(id) {
  return instance.get(`/cars/${id}`).then(res => res.data);
}

export function createCar(car) {
  return instance.post('/cars', car).then(res => res.data);
}

export function updateCar(id, car) {
  return instance.patch(`/cars/${id}`, car).then(res => res.data);
}

export function resetCar(id, car) {
  return instance.put(`/cars/${id}`, car).then(res => res.data);
}

export function deleteCar(id) {
  return instance.delete(`/cars/${id}`).then(res => res.data);
}
