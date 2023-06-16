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
          <>
            <div>
              <div>
                <p>{book[0].type}</p>
                <h3>{book[0].title}</h3>
                <p>{book[0].author}</p>
              </div>
              <div>
                <button type="button">Comment</button>
                <button
                  type="button"
                  onClick={() => dispatch(deleteBook(itemId))}
                >
                  Remove
                </button>
                <button type="button">Edit</button>
              </div>
            </div>
            <div>
              <p>Progress</p>
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
          </>
        ))}
    </div>
  );
};

export default BookItem;
