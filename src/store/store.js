
import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from "./todoSlice"
const store = configureStore({
    reducer: {
        todo:TodoReducer
    },
});

export default store;