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
        <div key={book.item_id}>
          <div className="card-card">
            <div className="book-card">
              <h3>{book.title}</h3>
              <p>Author</p>
              <p>{book.author}</p>
            </div>
            <div>
              <button type="button" onClick={() => removeOldBook(book.item_id)}>
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookItem;
