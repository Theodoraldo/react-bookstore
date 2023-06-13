import './styles/BookItem.css';

const BookItem = () => (
  <>
    <div className="item-container">
      <div>
        <div>
          <p>type</p>
          <h3>title</h3>
          <p>author</p>
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
          <div>percentage</div>
          <div>Completed</div>
        </div>
      </div>
      <div>
        <p>Current Chapter</p>
        <p>chapter</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  </>
);

export default BookItem;
