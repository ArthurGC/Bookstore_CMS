import { v4 as uuidv4 } from 'uuid';
import { addBookServer, removeBookServer } from '../../services/bookstore';

// Inital State
const initialState = [];

// Actions types
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

// Action Creators
export const addBookAction = (title, category) => async (dispatch) => {
  const newBook = {
    title,
    category,
    item_id: uuidv4(),
  };

  await addBookServer(newBook);

  dispatch({
    type: ADD_BOOK,
    payload: newBook,
  });
};

export const removeBookAction = (id) => async (dispatch) => {
  await removeBookServer(id);

  dispatch({
    type: REMOVE_BOOK,
    payload: {
      item_id: id,
    },
  });
};

// Reducers
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload.item_id);
    default:
      return state;
  }
};

export default booksReducer;
