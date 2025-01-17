import React, { useState } from 'react';
import { addTodo, updateTodo } from '../redux/slices/todoSlice';
import { useDispatch } from 'react-redux';
import TodosList from '../components/TodosList/TodosList';
import TodoForm from '../components/Form';

const Homepage = () => {
  const [title, setTitle] = useState('');
  const [desc, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SUBMITED THE DATA: ', title, desc, status);

    if (isEditing) {
      dispatch(updateTodo({
        id: currentTodoId,
        title,
        description: desc,
        status
      }));
      setIsEditing(false);
      setCurrentTodoId(null);
    } else {
      dispatch(
        addTodo({
          id: Date.now(),
          title: title,
          description: desc,
          status: status
        })
      );
    }

    setTitle('')
    setDescription('')
    setStatus('')
  };

  const editHandler = (todo) => {
    console.log('Editing todo: ', todo);
    setTitle(todo.title);
    setDescription(todo.description);
    setStatus(todo.status);
    setIsEditing(true);
    setCurrentTodoId(todo.id)
  };

  return (
    <div>
      <h1 className='text-xl font-bold text-center'>My Todo App</h1>
      <div className='w-[80%] mx-auto my-3'>
        <TodoForm handleSubmit={handleSubmit}
          setTitle={setTitle}
          setDescription={setDescription}
          setStatus={setStatus}
          title={title}
          desc={desc}
          status={status}
          buttonText={isEditing ? 'Update' : 'Save'} />
        <TodosList editHandler={editHandler} />
      </div>
    </div>
  );
};

export default Homepage;
