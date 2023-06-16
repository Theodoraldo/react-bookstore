import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks, deleteBook } from '../redux/books/booksSlice';
import './styles/BookItem.css';

const BookItem = () => {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <div>Loading ........</div>}
      {error && <div>Ooops! Something happend whiles fetching data</div>}
      {!isLoading &&
        Object.entries(books).map(([itemId, book]) => (
          <div className="card-card">
            <div>
              <div>
                <p>{book[0].category}</p>
                <h4>{book[0].title}</h4>
                <p>{book[0].author}</p>
                <div>
                  <button type="button" className="btn">
                    Comment
                  </button>
                  <button
                    className="btn"
                    type="button"
                    onClick={() => dispatch(deleteBook(itemId))}
                  >
                    Remove
                  </button>
                  <button type="button" className="btn">
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p>50%</p>
              <div>
                <div>{book.percentage}</div>
                <div>Completed</div>
              </div>
            </div>
            <div>
              <p>Current Chapter</p>
              <p>{book.chapter}</p>
              <button type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BookItem;
