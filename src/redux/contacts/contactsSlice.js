import { createSlice } from '@reduxjs/toolkit';
import { logoutThunk } from 'redux/auth/authOperations';
import {
  addContactsThunk,
  deleteContactsThunk,
  getAllContactsThunk,
} from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};



const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deleteContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => action.payload.id !== item.id);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      
      .addCase(logoutThunk.fulfilled, (state) => {
        state.items = initialState.items;
       
      })
      .addCase(logoutThunk.rejected, (state) => {
        state.items = initialState.items;
      });

  },
});

export default contactsSlice.reducer;