import { combineReducers } from '@reduxjs/toolkit';
import { cartSlice } from './cart';
import { productsSlice } from './products';
import { categoriesSlice } from './category';
// import { authSlice } from './auth';

const rootReducer = combineReducers({
    // auth: authSlice.reducer
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
    categories: categoriesSlice.reducer
});

export default rootReducer;
