import {createSlice} from '@reduxjx/toolkit'
const initialState = {
    items: [],
};

const recipeSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        claerCart: (state) => {
            state.items = [];
        },
    },

});

export const {addToCart, removeFromCart, claerCart} = createSlice.actions;