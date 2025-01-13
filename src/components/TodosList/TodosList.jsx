import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { deleteTodo } from '../../redux/slices/todoSlice';

const TodosList = ({ editHandler }) => {
  const data = useSelector((state) => state.myTodos);
  const dispatch = useDispatch()

  const deleteHandler = (todoId) => {
    dispatch(deleteTodo(todoId))
  }

  return (
    <div>
      <h1 className='text-xl font-bold'>My Todos</h1>

      {data.todos.length > 0 ? (data.todos.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todoItem={todoItem}
          editHandler={() => editHandler(todoItem)}
          deleteHandler={() => deleteHandler(todoItem.id)}
        />
      ))) : (
        <div className='text-gray-500 text-center mt-8 text-xl'>No todos!</div>
      )
      }
    </div>
  );
};

export default TodosList;
