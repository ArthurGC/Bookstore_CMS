import React from 'react';
import { useDispatch } from 'react-redux';
import { addBookAction } from '../../redux/books/books';
import options from './options';

const AddBook = () => {
  const dispatch = useDispatch();

  const submitBooktoStore = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const category = e.target.category.value;
    e.target.title.value = '';
    e.target.category.value = 'technology';
    dispatch(addBookAction(title, category));
  };

  return (
    <form onSubmit={submitBooktoStore}>
      <input name="title" placeholder="Add a book" />
      <select name="category" defaultValue="technology">
        <option value="category:" disabled>Category</option>
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
