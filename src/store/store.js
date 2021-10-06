import { configureStore } from '@reduxjs/toolkit';
import diceReducers from './dice/diceSlice';
import planesReducers from './planes/planesSlice';

const store = configureStore({
    reducer: {
        dice: diceReducers,
        planes: planesReducers
    }
});

export default store;