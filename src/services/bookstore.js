import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gKbdBULzeQgMvwW4IEc0/books';

const refactorDataFromAPI = (data) => {
  const initialBooks = [];
  Object.entries(data).forEach((book) => {
    initialBooks.push(
      {
        title: book[1][0].title,
        category: book[1][0].category,
        item_id: `${book[0]}`,
      },
    );
  });
  return initialBooks;
};

export const getInitialBooks = async () => {
  const response = await axios.get(baseURL);
  const { data } = response;
  return refactorDataFromAPI(data);
};

export const addBookServer = async (newBook) => {
  const response = await axios.post(baseURL, newBook);
  return response.data;
};

export const removeBookServer = async (id) => {
  const deleteURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gKbdBULzeQgMvwW4IEc0/books/${id}`;
  const response = await axios.delete(deleteURL);
  return response.data;
};
