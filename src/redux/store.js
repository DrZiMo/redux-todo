import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slices/todoSlice';
import {postsSlice} from './slices/postsSlice';
import { commentSlice } from './slices/commentSlice';

const store = configureStore({
    reducer: {
        myTodos: todoSlice.reducer,
        myPosts: postsSlice.reducer,
        myComments: commentSlice.reducer
    },
});

export default store;
