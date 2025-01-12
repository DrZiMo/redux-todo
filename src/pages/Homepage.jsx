import React, { useState } from 'react';
import { addTodo } from '../redux/slices/todoSlice';
import { useDispatch } from 'react-redux';
import TodosList from '../components/TodosList/TodosList';

const Homepage = () => {
  const [title, setTitle] = useState('');
  const [desc, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // Prevent the browser to refresh the page when the form is submited.
    e.preventDefault();
    console.log('SUBMITED THE DATA: ', title, desc, status);

    dispatch(
      addTodo({
        id: 2,
        title: title,
        description: desc,
        status: status
      })
    );
  };

  return (
    <div>
      <h1 className='text-xl font-bold text-center'>My Todo App</h1>
      <div className='w-[80%] mx-auto my-3'>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className='inputGroup grid'>
            <label htmlFor='todo'>Enter todo title</label>
            <input
              type='text'
              className='p-3 rounded-md border'
              placeholder='Enter todo title'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className='inputGroup grid my-3'>
            <label htmlFor='desc'>Description</label>
            <input
              type='text'
              className='p-3 rounded-md border'
              placeholder='Enter todo description'
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className='inputGroup'>
            <label htmlFor='status'>Status</label>
            <select
              onChange={(e) => setStatus(e.target.value)}
              className='border w-full p-3 rounded-md'>
              <option value='NOTSTARTED'>Not started</option>
              <option value='INPROGRESS'>In progress</option>
              <option value='COMPLETED'>Completed</option>
            </select>
          </div>

          <div className='submitBtn my-3'>
            <button className='bg-blue-600 px-8 py-3 text-white rounded-md font-bold hover:bg-blue-500 transition shadow-md'>
              Save
            </button>
          </div>
        </form>

        <TodosList />
      </div>
    </div>
  );
};

export default Homepage;
