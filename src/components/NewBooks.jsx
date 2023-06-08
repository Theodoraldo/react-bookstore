import React from 'react';

export default function NewBooks() {
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" placeholder="Book Title" />
        <select name="">
          <option value="Category" selected>
            Category
          </option>
          <option value="Category A">Category A</option>
          <option value="Category B">Category B</option>
          <option value="Category C">Category C</option>
        </select>
        <button>ADD BOOK</button>
      </form>
    </div>
  );
}
