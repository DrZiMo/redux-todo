import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    comments: [],
    isLoading: false,
    error: ''
}

export const getComment = createAsyncThunk('comments/list', async (_, {getState, rejectWithValue}) => {
    try {
        const selectedPostId = getState().myPosts.selectedPost;
        const respond = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${selectedPostId}`)
        console.log(respond.data)
        return respond.data
    } catch (error) {
        return rejectWithValue(error.message || 'Some thing went wrong!')
    }
})

export const commentSlice = createSlice({
    name: 'comment slice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getComment.pending, (state, action) => {
            state.isLoading = true,
            state.error = '',
            state.comments = []
        })
        builder.addCase(getComment.fulfilled, (state, action) => {
            state.isLoading = false,
            state.error = '',
            state.comments = action.payload
        })
        builder.addCase(getComment.rejected, (state, action) => {
            state.isLoading = false,
            state.comments = [],
            state.error = action.payload
        })
    }
})