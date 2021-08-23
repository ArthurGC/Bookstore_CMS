import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookAction } from '../../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const removeBookfromStore = (id) => {
    dispatch(removeBookAction(id));
  };

  return (
    <div className="book__container">
      <div className="description">
        <p className="category">{author}</p>
        <p className="title">{title}</p>
        <button type="button" className="comments">Comments</button>
        <button type="button" className="remove" onClick={() => removeBookfromStore(id)}>Remove</button>
        <button type="button" className="edit">Edit</button>
      </div>
      <div className="progress">
        <p className="percentage">90% Completed</p>
      </div>
      <div className="update">
        <p className="current">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 17</p>
        <button type="button" className="updating">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
