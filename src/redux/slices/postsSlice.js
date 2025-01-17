import {
    createAsyncThunk,
    createSlice,
    isRejectedWithValue,
} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    posts: [],
    loading: false,
    error: '',
};

export const getPosts = createAsyncThunk(
    'posts/list',
    async (data, { rejectWithValue }) => {
        try {
            const respond = await axios.get(
                'https://jsonplaceholder.typicode.com/posts'
            );
            console.log(respond);
            return respond.data;
        } catch (error) {
            return rejectWithValue(error.message || 'Something went wrong!');
        }
    }
);

export const postsSlice = createSlice({
    name: 'posts slice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state, action) => {
            (state.loading = true), (state.error = ''), (state.posts = []);
        })
        builder.addCase(getPosts.rejected, (state, action) => {
            state.error = action.payload;
            (state.loading = false), (state.posts = []);
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            (state.posts = action.payload),
                (state.loading = false),
                (state.error = '');
        })
    },
});
