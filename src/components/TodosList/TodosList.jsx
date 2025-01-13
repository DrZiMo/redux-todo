import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodosList = ({ editHandler }) => {
  const data = useSelector((state) => state.myTodos);

  return (
    <div>
      <h1 className='text-xl font-bold'>My Todos</h1>

      {data.todos.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todoItem={todoItem}
          editHandler={() => editHandler(todoItem)}
        />
      ))}
    </div>
  );
};

export default TodosList;
