import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookAction } from '../../redux/books/books';

const Book = ({ title, category, id }) => {
  const dispatch = useDispatch();

  const removeBookfromStore = (id) => {
    dispatch(removeBookAction(id));
  };

  return (
    <div className="book__container grid lg:grid-cols-7 lg:gap-8">
      <div className="description lg:col-span-3">
        <p className="category text-title opacity-50 font-mont font-bold text-sm capitalize">{category}</p>
        <p className="title text-title font-robo font-bold text-2xl">{title}</p>
        <p className="text-link font-robo font-light text-sm mb-4">Author</p>
        <button type="button" className="text-link font-robo font-light text-sm lg:pr-4 hover:text-blue-900">Comments</button>
        <button type="button" className="text-link font-robo font-light text-sm lg:pr-4 lg:pl-4 border-r border-l border-gray-200 hover:text-blue-900" onClick={() => removeBookfromStore(id)}>Remove</button>
        <button type="button" className="text-link font-robo font-light text-sm lg:pl-4 hover:text-blue-900">Edit</button>
      </div>
      <div className="progress lg:col-span-2 border-r border-gray-200">
        <p className="percentage text-title">90% Completed</p>
      </div>
      <div className="update lg:col-span-2">
        <p className="current text-title opacity-50 font-robo font-light text-sm lg:mb-2">CURRENT CHAPTER</p>
        <p className="chapter text-title font-robo font-light text-base lg:mb-7">Chapter 1</p>
        <button type="button" className="updating bg-azure text-white py-2 px-8 font-robo font-light text-sm rounded hover:bg-blue-600">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
