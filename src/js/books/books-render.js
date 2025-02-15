export function bookTemplate(book) {
  const { id, image, title, author, description } = book;
  return ` <li class="books-item" data-id="${id}">
                <img class="book-image" src="${image}" alt="#">
                <p class="book-text-info"><strong>ID:</strong> ${id}</p>
                <p class="book-text-info"><strong>Title:</strong> ${title}</p>
                <p class="book-text-info"><strong>Author:</strong> ${author}</p>
                <p class="book-text-info"><strong>Description:</strong> ${description}</p>
            </li>`;
}

export function booksTemplate(books) {
  return books.map(bookTemplate).join('');
}
