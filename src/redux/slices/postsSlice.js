import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    posts: [],
    loading: false,
    error: '',
    selectedPost: null,
    singlePost: null
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

export const getSinglePost = createAsyncThunk('post/single', async (_, {getState, rejectWithValue}) => {
    try {
        const selectedPostId = getState().myPosts.selectedPost
        const respond = await axios.get(`https://jsonplaceholder.typicode.com/posts/${selectedPostId}`)
        return respond.data
    } catch (error) {
        return rejectWithValue(error.message || 'Something went wrong!')
    }
})

export const postsSlice = createSlice({
    name: 'posts slice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state) => {
            state.loading = true,
            state.error = '',
            state.posts = []
        })
        builder.addCase(getPosts.rejected, (state, action) => {
            state.error = action.payload,
            state.loading = false,
            state.posts = [];
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload,
            state.loading = false,
            state.error = '';
        })
        builder.addCase(getSinglePost.fulfilled, (state, action) => {
            state.singlePost = action.payload
        })
    },
    reducers: {
        changeSelectedPost: (state, action) => {
            const id = action.payload
            state.selectedPost = id
        }
    }
});

export const { changeSelectedPost } = postsSlice.actions
