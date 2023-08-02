import { createAsyncThunk } from "@reduxjs/toolkit";

import {getCurrentUser,
loginFoo,
logoutFoo,
signupFoo,
token } from 'api/API';

export const registerThunk = createAsyncThunk(
    'auth/register',
    async(credentials,thunkAPI) => {
        try{
            const response = await signupFoo(credentials);
            token.set(response.token);
            return response;
        }catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const loginThunk = createAsyncThunk('auth/login',
async(credentials,thunkAPI) =>{
    try {
        const response = await loginFoo(credentials);
        token.set(response.token);
        return response;
    }catch(e){
        return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const currentUserThunk = createAsyncThunk('auth/current',
async(_, thunkAPI) => {
    try {
        const accessToken = thunkAPI.getState().auth.token;
        if (!accessToken){
            return thunkAPI.rejectWithValue('There is no valid token');
        }
        token.set(accessToken);
        const response = await getCurrentUser();
        return response;
    }catch(e){
        return thunkAPI.rejectWithValue(e.message);
    }
}
);

export const logoutThunk = createAsyncThunk('auth/logout',
async(_, thunkAPI) =>{
    try{
        const response = await logoutFoo();
        token.unset();
        return response;
    }catch(e){
        return thunkAPI.rejectWithValue(e.message);
    }
}
);
