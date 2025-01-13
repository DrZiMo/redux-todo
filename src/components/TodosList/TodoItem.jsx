import React from 'react'

const TodoItem = ({ todoItem, editHandler }) => {
    return (
        <div className='todoItem border my-3 rounded-md p-3 flex justify-between items-center'>
            <div className=''>
                <h1 className='text-xl font-bold'>{todoItem.title}</h1>
                <p className='text-sm'>{todoItem.description}</p>
                <p className=''>STATUS : {todoItem.status}</p>
            </div>
            <div className='buttons flex gap-2'>
                <button className='px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-white transition' onClick={() => editHandler(todoItem)}>Edit</button>
                <button className='px-4 py-2 bg-red-600 hover:bg-red-500 rounded-md text-white transition'>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem