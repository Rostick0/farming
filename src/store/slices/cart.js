import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const setLocalStorage = (productsLocal = []) => {
    if (!productsLocal.length && localStorage.getItem('cart')) {
        localStorage.removeItem('cart')
    }

    localStorage.setItem('cart', JSON.stringify(productsLocal))
}

const productAddFunc = (state, action) => {
    const productLocalIndex = [...state.productsLocal].findIndex(product => product.id === action.payload.id);

    if (
        productLocalIndex !== -1
    ) {
        state.productsLocal[productLocalIndex] = action.payload;
        setLocalStorage(state.productsLocal)
        return;
    }

    state.productsLocal.push(action.payload);
    setLocalStorage(state.productsLocal);
};

const productDeleteFunc = (state, action) => {
    const productLocalIndex = [...state.productsLocal].findIndex(product => product.id === action.payload.id);
    const productIndex = [...state.productsLocal].findIndex(product => product.id === action.payload.id);

    state.productsLocal.splice(productLocalIndex, 1);
    state.products.splice(productIndex, 1);
    setLocalStorage(state.productsLocal);
}

const productDeleteAllFunc = (state) => {
    state.productsLocal.length = 0;
    state.products.length = 0;
    setLocalStorage([]);
};

const editProductCountFunc = (state, action) => {
    const productLocalIndex = [...state.productsLocal].findIndex(product => product.id === action.payload.id);
    const productIndex = [...state.productsLocal].findIndex(product => product.id === action.payload.id);

    state.productsLocal[productLocalIndex].count = action.payload.count;
    state.products[productIndex].count = action.payload.count;
};

const initialState = {
    productsLocal: [
        {
            id: 2,
            count: 5
        }
    ],
    products: [
        {
            id: 2,
            image: 'https://pet-q.com/wp-content/uploads/2018/06/2018_06_11-2_2-600x400.jpg',
            title: 'Кролик белый',
            price: '999',
            count: 5
        }
    ]
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        productAdd: productAddFunc,
        productDelete: productDeleteFunc,
        productDeleteAll: productDeleteAllFunc,
        editProductCount: editProductCountFunc
    },
    // extraReducers: {
    //     [fetchLogin.fulfilled]: (state, action) => {
    //         state.status = true;
    //         state.error = false;
    //         state.authData = action.payload;
    //     },
    //     [fetchRegistration.fulfilled]: (state, action) => {
    //         state.status = true;
    //         state.error = false;
    //         state.authData = action.payload;
    //     },
    //     [fetchLogin.rejected]: (state, action) => {
    //         state.status = false;
    //         state.errorLogin = action?.error?.message;
    //     },
    //     [fetchRegistration.rejected]: (state, action) => {
    //         state.status = false;
    //         state.errorRegistration = action?.error?.message;
    //     }
    // }
});

export const { productAdd, productDelete, productDeleteAll, editProductCount } = cartSlice.actions