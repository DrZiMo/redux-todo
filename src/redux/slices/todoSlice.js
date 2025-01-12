import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 1,
      title: 'Visit grandma',
      description: 'Visit your grand mother!!',
      status: 'INPROGRESS'
    }
  ]
};

const todoSlice = createSlice({
  name: 'Todo slice',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    }
  }
});

export const { addTodo } = todoSlice.actions;
export default todoSlice;
