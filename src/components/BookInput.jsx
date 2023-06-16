import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { postBook } from '../redux/books/booksSlice';

export default function NewBooks() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleAddNewBook = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: nanoid(),
      title: title,
      author: author,
      category: category,
    };

    if (title !== '' && author !== '' && category !== '') {
      dispatch(postBook(newBook));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
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
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Action">Action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Series">Series</option>
            <option value="Drama">Drama</option>
            <option value="Economy">Economy</option>
            <option value="Comedy">Comedy</option>
          </select>
        <button type="button" onClick={handleAddNewBook}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
}
