import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ bookProps }) => {
  return (
    <>
      {bookProps.map((bookProp) => {
        <BookItem key={bookProp.id} book={bookProp} />;
      })}
    </>
  );
};

BookList.propTypes = {
  bookProps: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      chapter: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BookList;
