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
    <div className="px-8 sm:px-16 lg:px-24 xl:px-28 2xl:px-40">
      <div className="container mx-auto">
        <h2 className="text-add font-mont font-bold text-xl mb-4">ADD NEW BOOK</h2>
        <form onSubmit={submitBooktoStore} className="pb-8 grid lg:grid-cols-8 xl:grid-cols-5 lg:gap-6 gap-4 xl:gap-8">
          <input name="title" placeholder="Book title" className="px-4 py-3 rounded lg:col-span-4 xl:col-span-3 border border-gray-200 font-mont font-normal md:text-base" />
          <select name="category" defaultValue="technology" className="bg-white px-4 py-3 rounded border border-gray-200 font-mont font-normal md:text-base lg:col-span-2 xl:col-span-1">
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
          <button type="submit" className="bg-azure text-white py-3 px-11 rounded font-robo font-bold md:text-sm hover:bg-blue-600 lg:col-span-2 xl:col-span-1">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
