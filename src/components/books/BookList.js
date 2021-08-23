import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <ul className="booklist__container">
      {books.map((book) => (
        <li key={book.item_id}>
          <Book title={book.title} category={book.category} id={book.item_id} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
