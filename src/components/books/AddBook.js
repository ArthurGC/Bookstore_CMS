import React from 'react';
import { useDispatch } from 'react-redux';
import { addBookAction } from '../../redux/books/books';
import options from './options';

const AddBook = () => {
  const dispatch = useDispatch();

  const submitBooktoStore = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    e.target.title.value = '';
    e.target.author.value = '';
    dispatch(addBookAction(title, author));
  };

  return (
    <form onSubmit={submitBooktoStore}>
      <input name="title" placeholder="Add a book" />
      <input name="author" placeholder="Add a author" />
      <select defaultValue="category">
        <option value="category" disabled>Category</option>
        {options.map((option) => (
          <option
            key={option.id}
            value={option.value}
          >
            {option.text}
          </option>
        ))}

      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default AddBook;
