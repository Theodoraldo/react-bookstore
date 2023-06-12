import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';
import categoriesReducer from './categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
