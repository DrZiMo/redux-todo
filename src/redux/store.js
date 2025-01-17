import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slices/todoSlice';
import {postsSlice} from './slices/postsSlice';

const store = configureStore({
    reducer: {
        myTodos: todoSlice.reducer,
        myPosts: postsSlice.reducer,
    },
});

export default store;
