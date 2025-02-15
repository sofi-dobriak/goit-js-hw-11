import { bookTemplate, booksTemplate } from './books-render';
import {
  getAllBooks,
  createBook,
  updateBook,
  resetBook,
  deleteBook,
} from './books-API';

const refs = {
  createForm: document.querySelector('.js-create-form'),
  upadateForm: document.querySelector('.js-update-form'),
  resetForm: document.querySelector('.js-reset-form'),
  deleteForm: document.querySelector('.js-delete-form'),
  booksList: document.querySelector('.js-books-list'),
};

refs.createForm.addEventListener('submit', handleCreateBook);
refs.upadateForm.addEventListener('submit', handleUpdateBook);
refs.resetForm.addEventListener('submit', handleResetBook);
refs.deleteForm.addEventListener('submit', handleDeleteBook);

function handleCreateBook(e) {
  e.preventDefault();

  const bookData = {
    image: e.target.elements.image.value,
    title: e.target.elements.title.value,
    author: e.target.elements.author.value,
    description: e.target.elements.description.value,
  };

  createBook(bookData)
    .then(newBook => {
      const markup = bookTemplate(newBook);
      refs.booksList.insertAdjacentHTML('afterbegin', markup);
    })
    .catch(error => {
      console.log(error);
    });

  e.target.reset();
}

function handleUpdateBook(e) {
  e.preventDefault();

  const bookdID = e.target.elements.id.value;
  const formData = new FormData(e.target);
  const bookData = {};

  for (const [key, value] of formData.entries()) {
    if (!value.trim()) {
      continue;
    }

    bookData[key] = value;
  }

  updateBook(bookdID, bookData)
    .then(newBook => {
      const markup = bookTemplate(newBook);
      const oldBook = document.querySelector(`[data-id="${bookdID}"]`);

      oldBook.insertAdjacentHTML('beforebegin', markup);
      oldBook.remove();
    })
    .catch(error => {
      console.log(error);
    });

  e.target.reset();
}

function handleResetBook(e) {
  e.preventDefault();

  const bookdID = e.target.elements.id.value;
  const formData = new FormData(e.target);
  const bookData = {};

  for (const [key, value] of formData.entries()) {
    bookData[key] = value;
  }

  resetBook(bookdID, bookData)
    .then(newBook => {
      const markup = bookTemplate(newBook);
      const oldBook = document.querySelector(`[data-id="${bookdID}"]`);

      oldBook.insertAdjacentHTML('beforebegin', markup);
      oldBook.remove();
    })
    .catch(error => {
      console.log(error);
    });

  e.target.reset();
}

function handleDeleteBook(e) {
  e.preventDefault();

  const bookdID = e.target.elements.id.value;

  deleteBook(bookdID).then(() => {
    const oldBook = document.querySelector(`[data-id="${bookdID}"]`);
    oldBook.remove();
  });

  e.target.reset();
}

getAllBooks()
  .then(books => {
    const markup = booksTemplate(books);
    refs.booksList.innerHTML = markup;
  })
  .catch(error => {
    console.log(error);
  });
