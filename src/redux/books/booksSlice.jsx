import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/z7bqE3wKlJii9rtzhvHF/books';

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (_, thunkAPI) => {
    try {
      const response = await axios(URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'An error has occurred while getting data'
      );
    }
  }
);

export const postBook = createAsyncThunk(
  'addBooks/addBook',
  async (book, thunkAPI) => {
    try {
      const response = await axios(URL, {
        method: 'POST',
        data: JSON.stringify(book),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (response.status === 201) {
        thunkAPI.dispatch(getBooks());
        return null;
      }
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to add book');
    }
  }
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (itemId, thunkAPI) => {
    try {
      const response = await axios(`${URL}/${itemId}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (response.status === 201) {
        thunkAPI.dispatch(getBooks());
        return null;
      }
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to delete book');
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.isLoading = true;
    },

    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },

    [getBooks.rejected]: (state) => {
      state.isLoading = false;
      state.errMsg = true;
    },

    [postBook.pending]: (state) => {
      state.addMsg = true;
    },

    [postBook.fulfilled]: (state, action) => {
      state.addMsg = false;
      state.books = action.payload;
    },

    [postBook.rejected]: (state) => {
      state.addMsg = false;
    },

    [deleteBook.pending]: (state) => {
      state.delMsg = true;
    },

    [deleteBook.fulfilled]: (state, action) => {
      state.delMsg = false;
      state.books = action.payload;
    },

    [deleteBook.pending]: (state) => {
      state.delMsg = false;
    },
  },
});

export default booksSlice.reducer;
