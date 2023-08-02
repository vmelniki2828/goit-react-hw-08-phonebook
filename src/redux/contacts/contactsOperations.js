import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteContacts, getContacts, postContacts } from 'api/API';


export const getAllContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getContacts();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addNew',
  async (contact, thunkAPI) => {
    try {
      const response = await postContacts(contact);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await deleteContacts(id);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);