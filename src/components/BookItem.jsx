import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks, removeBook } from '../redux/books/booksSlice';
import './styles/BookItem.css';

const BookItem = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  console.log(books);
  const removeOldBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div>
      {Object.entries(books).map(([itemId, book]) => (
        <div key={itemId} className="book-card">
          <h3>{book[0].title}</h3>
          <p>{book[0].author}</p>
          <p>{book[0].category}</p>
          <button type="button" onClick={() => removeOldBook(book.item_id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookItem;
