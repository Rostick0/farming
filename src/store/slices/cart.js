import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const setLocalStorage = (products = []) => {
    if (!products.length && localStorage.getItem('cart')) {
        localStorage.removeItem('cart')
    }

    localStorage.setItem('cart', JSON.stringify(products))
}

const productAddFunc = (state, action) => {
    const productIndex = [...state.products].findIndex(product => product.id === action.payload.id);

    if (
        productIndex !== -1
    ) {
        state.products[productIndex] = action.payload;
        setLocalStorage(state.products)
        return;
    }

    state.products.push(action.payload);
    setLocalStorage(state.products);
};

const productDeleteFunc = (state, action) => {
    const productIndex = [...state.products].findIndex(product => product.id === action.payload.id);
    state.products.splice(productIndex, 1)
    setLocalStorage(state.products);
}

const productDeleteAllFunc = (state) => {
    state.products.length = 0;
    setLocalStorage([]);
};

const editProductCountFunc = (state, action) => {
    const productIndex = [...state.products].findIndex(product => product.id === action.payload.id);
    state.products[productIndex].count = action.payload.count;
    setLocalStorage(state.products)
};

const getLocalProducts = () => {
    const products = localStorage.getItem('cart');

    if (!products) return [];

    return JSON.parse(products);
}

const initialState = {
    products: getLocalProducts()
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        productAdd: productAddFunc,
        productDelete: productDeleteFunc,
        productDeleteAll: productDeleteAllFunc,
        editProductCount: editProductCountFunc,
    }
});

export const { productAdd, productDelete, productDeleteAll, editProductCount } = cartSlice.actions