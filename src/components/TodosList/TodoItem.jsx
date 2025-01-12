import React from 'react'

const TodoItem = ({ todoItem }) => {
    return (
        <div className='todoItem border my-3 rounded-md p-3'>
            <h1 className='text-xl font-bold'>{todoItem.title}</h1>

            <p className='text-sm'>{todoItem.description}</p>

            <p className=''>STATUS : {todoItem.status}</p>
        </div>
    )
}

export default TodoItem