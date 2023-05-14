import { combineReducers } from '@reduxjs/toolkit';
import { cartSlice } from './cart';
// import { authSlice } from './auth';

const rootReducer = combineReducers({
    // auth: authSlice.reducer
    cart: cartSlice.reducer
});

export default rootReducer;
