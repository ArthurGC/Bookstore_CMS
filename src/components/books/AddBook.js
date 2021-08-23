import React from 'react';
import options from './options';

const AddBook = () => (
  <form>
    <input name="title" placeholder="Add a title book" />
    <select defaultValue="category">
      <option value="category" disabled>Category</option>
      {options.map((option) => <option key={option.id} value={option.value}>{option.text}</option>)}

    </select>
    <button type="submit">ADD BOOK</button>
  </form>
);

export default AddBook;
