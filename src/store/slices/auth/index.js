import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { validFormLogin, validFormRegistration } from './validFunctions';

export const fetchLogin = createAsyncThunk(
    'authData/fetchLogin',
    async function (authObj) {
        console.log(authObj);

        const valid = validFormLogin(authObj);

        if (valid) throw new Error(valid);

        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

        const data = await response.json();

        console.log(data);

        return {
            authToken: 1235
        };
    }
)

export const fetchRegistration = createAsyncThunk(
    'authData/fetchRegistration',
    async function (authObj) {
        const valid = validFormRegistration(authObj);

        if (valid) throw new Error(valid);

        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

        const data = await response.json();

        console.log(data);

        return {
            authToken: 1235
        };
    }
)

const initialState = {
    authData: {},
    status: null,
    errorLogin: '',
    errorRegistration: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchLogin.fulfilled]: (state, action) => {
            state.status = true;
            state.error = false;
            state.authData = action.payload;
        },
        [fetchRegistration.fulfilled]: (state, action) => {
            state.status = true;
            state.error = false;
            state.authData = action.payload;
        },
        [fetchLogin.rejected]: (state, action) => {
            state.status = false;
            state.errorLogin = action?.error?.message;
        },
        [fetchRegistration.rejected]: (state, action) => {
            state.status = false;
            state.errorRegistration = action?.error?.message;
        }
    }
});