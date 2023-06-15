import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/z7bqE3wKlJii9rtzhvHF/books';

export const getBooks = createAsyncThunk('books/getBooks', async (thunkAPI) => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithVAlue('Oooops, fetch request failed');
  }
});

export const postBook = createAsyncThunk('books/postBook', async (NewBooks) => {
  try {
    const response = await axios.post(URL, NewBooks);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithVAlue('Oooops, post request failed');
  }
});

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (itemId) => {
    try {
      const response = await axios.delete(`${URL}/${itemId}`, itemId);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithVAlue('Oooops, post request failed');
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
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
      getBooks(action.payload);
    });

    builder.addCase(getBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(postBook.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(postBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
      state.error = false;
    });

    builder.addCase(postBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
      state.error = false;
    });
  },
  reducers: {},
});

export default booksSlice.reducer;
