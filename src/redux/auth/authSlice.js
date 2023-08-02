import { createSlice } from "@reduxjs/toolkit";
import { currentUserThunk, loginThunk, logoutThunk } from "redux/auth/authOperations";
import { registerThunk } from "./authOperations";

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
  isRefreshingUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(logoutThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        return initialState;
        
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = action.payload;
      })


      .addCase(currentUserThunk.pending, (state) => {
        state.isLoading = true;
        state.isRefreshingUser = true;
      })

      .addCase(currentUserThunk.fulfilled, (state, action) => {
       state.isLoggedIn = true;
       state.isRefreshingUser = false;
       state.user = action.payload;
        
      })
      .addCase(currentUserThunk.rejected, (state, action) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoading = false;
        state.isLoggedIn = false;
        state.isRefreshingUser = false;
        state.error = action.payload;
      });
  },
});
export default authSlice.reducer;
