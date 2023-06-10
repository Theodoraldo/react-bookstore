import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ bookProps }) => (
  <div>
    {bookProps.map((bookProp) => (
      <BookItem key={bookProp.id} book={bookProp} />
    ))}
  </div>
);

BookList.propTypes = {
  bookProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      chapter: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
