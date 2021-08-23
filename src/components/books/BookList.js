import React from 'react';
import Book from './Book';

const BookList = () => {
  const store = [
    {
      title: 'Book Test 1',
      category: 'Technology',
      item_id: '1',
    },
    {
      title: 'Book Test 2',
      category: 'Technology',
      item_id: '2',
    },
  ];
  return (
    <ul className="booklist__container">
      {store.map((book) => (
        <li key={book.item_id}>
          <Book title={book.title} category={book.category} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
