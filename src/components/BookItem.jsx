import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import './styles/BookItem.css';

const BookItem = () => {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();

  const removeOldBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      {books.map((book) => (
        <div key={book.item_id} className="section">
          <div className="card-card">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button
              className="remove-btn"
              type="button"
              onClick={() => removeOldBook(book.item_id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookItem;
