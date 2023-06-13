import React from 'react';
import { useSelector } from 'react-redux';
import './styles/BookItem.css';

const BookItem = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => (
        <div key={book.item_id} className="book-card">
          <div>
            <div>
              <p>Title</p>
              <h3>{book.title}</h3>
              <p>Author</p>
              <p>{book.author}</p>
            </div>
            <div>
              <button type="button">Comment</button>
              <button type="button">Remove</button>
              <button type="button">Edit</button>
            </div>
          </div>
          <div>
            <p>Progress</p>
            <div>
              <div>50%</div>
              <div>Completed</div>
            </div>
          </div>
          <div>
            <p>Current Chapter</p>
            <p>Chapter</p>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookItem;
