import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks, deleteBook } from '../redux/books/booksSlice';
import './styles/BookItem.css';

const BookItem = () => {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((state) => state.books);
  const removeOldBook = (itemId) => {
    dispatch(deleteBook(itemId));
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <div>Loading ........</div>}
      {error && <div>Ooops! Something happend whiles fetching data</div>}
      {!isLoading &&
        Object.entries(books).map(([itemId, book]) => (
          <div key={itemId} className="book-card">
            <h3>{book[0].title}</h3>
            <p>{book[0].author}</p>
            <p>{book[0].category}</p>
            <button type="button" onClick={() => removeOldBook(itemId)}>
              Remove
            </button>
          </div>
        ))}
    </div>
  );
};

export default BookItem;
