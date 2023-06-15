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
        <input
          type="text"
          placeholder="Book Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="button" onClick={handleAddNewBook}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
}
