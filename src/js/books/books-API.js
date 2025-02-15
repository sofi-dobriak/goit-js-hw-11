import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
});

export function getAllBooks() {
  return instance.get('/books').then(res => res.data);
}

export function getOneBook(id) {
  return instance.get(`/books/${id}`).then(res => res.data);
}

export function createBook(book) {
  return instance.post('/books', book).then(res => res.data);
}

export function updateBook(id, book) {
  return instance.patch(`/books/${id}`, book).then(res => res.data);
}

export function resetBook(id, book) {
  return instance.put(`/books/${id}`, book).then(res => res.data);
}

export function deleteBook(id) {
  return instance.delete(`/books/${id}`).then(res => res.data);
}
