import React from 'react';
import { useSelector } from 'react-redux';
import useBooks from '../../hooks/useBooks';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);

  useBooks();

  return (
    <div className="px-8 sm:px-16 lg:px-24 xl:px-28 bg-backg py-9">
      <ul className="container mx-auto">
        {books.map((book) => (
          <li
            key={book.item_id}
            className="bg-white px-7 py-8 rounded mb-4"
          >
            <Book title={book.title} category={book.category} id={book.item_id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
