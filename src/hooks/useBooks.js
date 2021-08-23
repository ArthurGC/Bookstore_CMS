import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addInitialBooks } from '../redux/books/books';

const useBooks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addInitialBooks());
  }, []);
};

export default useBooks;
