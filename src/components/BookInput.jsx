import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBook } from '../redux/books/booksSlice';

export default function NewBooks() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddNewBook = () => {
    const newBook = {
      item_id: nanoid(),
      title: title,
      author: author,
      category: 'Fiction',
    };

    dispatch(addBook(newBook));

    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="button" onClick={handleAddNewBook}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
}
