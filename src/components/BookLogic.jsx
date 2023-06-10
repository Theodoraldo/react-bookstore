import BookList from './BookList';
import BookInput from './BookInput';

export default function Books() {
  const books = [
    {
      id: 1,
      type: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      percentage: 64,
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      type: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      percentage: 8,
      chapter: 'Chapter 3: A Lesson Learned',
    },
    {
      id: 3,
      type: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      percentage: 0,
      chapter: 'Introduction',
    },
  ];

  return (
    <>
      <BookList bookProps={books} />
      <hr />
      <BookInput />
    </>
  );
}
