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
      {isLoading && <div className="alert alert-info">Loading ........</div>}
      {error && (
        <div className="alert alert-danger">
          Ooops! Something happend whiles fetching data
        </div>
      )}
      {!isLoading &&
        Object.entries(books).map(([itemId, book]) => (
          <div key={itemId} className="card-card">
            <div>
              <p className="trans category">{book[0].category}</p>
              <h4 className="trans">{book[0].title}</h4>
              <p className="trans cls-author">{book[0].author}</p>
              <div className="trans comment-delete-edit">
                <button type="button" className="btn">
                  Comment
                </button>
                <div className="trans comment-delete-edit">
                  <div className="vertical-line-1"></div>
                  <button
                    className="btn"
                    type="button"
                    onClick={() => dispatch(deleteBook(itemId))}
                  >
                    Remove
                  </button>
                  <div className="vertical-line-1"></div>
                </div>
                <button type="button" className="btn">
                  Edit
                </button>
              </div>
            </div>
            <div>
              <p className="trans">50%</p>
              <div>
                <div className="trans completed">Completed</div>
              </div>
            </div>
            <div className="vertical-line-2"></div>
            <div className="trans">
              <p className="trans current">Current Chapter</p>
              <p>{book.chapter}</p>
              <button className="update-btn" type="button">
                UPDATE PROGRESS
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BookItem;
