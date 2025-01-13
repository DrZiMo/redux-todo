import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: Date.now(),
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
    },
    updateTodo(state, action) {
      const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (todoIndex !== -1) {
        state.todos[todoIndex] = action.payload
      }
    }
  }
});

export const { addTodo, updateTodo } = todoSlice.actions;
export default todoSlice;
