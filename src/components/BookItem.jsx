import PropTypes from 'prop-types';
import './styles/BookItem.css';

const BookItem = ({ book }) => {
  return (
    <>
      <div className="item-container">
        <div>
          <div>
            <p>{book.type}</p>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
          <div>
            <button>Comment</button>
            <button>Remove</button>
            <button>Edit</button>
          </div>
        </div>
        <div>
          <p>Progress</p>
          <div>
            <div>{book.percentage}%</div>
            <div>Completed</div>
          </div>
        </div>
        <div>
          <p>Current Chapter</p>
          <p>{book.chapter}</p>
          <button>UPDATE PROGRESS</button>
        </div>
      </div>
    </>
  );
};

BookItem.propTypes = {
  book: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      chapter: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BookItem;
