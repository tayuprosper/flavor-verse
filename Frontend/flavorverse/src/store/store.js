import {configureStore} from 'reduxjx/toolkit';
import recipeReducer from '.recipeSlice';

const store = configureStore({
    reducer: {
        recipes: recipeReducer
    },
});

export default store;