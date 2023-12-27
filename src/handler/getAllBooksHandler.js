const books = require('../books');

const getAllBooksHandler = (request) => {
  const { name, reading, finished } = request.query;

  let filteredBooks = [...books];

  if (name) {
    const lowercaseName = name.toLowerCase();
    filteredBooks = filteredBooks.filter(
      (book) => book.name.toLowerCase().includes(lowercaseName) !== false,
    );
  }

  if (reading !== undefined) {
    const isReading = reading === '1';
    filteredBooks = filteredBooks.filter((book) => book.reading === isReading);
  }

  if (finished !== undefined) {
    const isFinished = finished === '1';
    filteredBooks = filteredBooks.filter((book) => book.finished === isFinished);
  }

  // eslint-disable-next-line no-shadow
  const result = filteredBooks.map(({ id, name, publisher }) => ({ id, name, publisher }));

  return {
    status: 'success',
    data: {
      books: result,
    },
  };
};

module.exports = { getAllBooksHandler };
