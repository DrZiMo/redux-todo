import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center p-6 w-fit mx-auto rounded-md h-full'>
            <h1 className='font-bold text-3xl'>404</h1>
            <p>This page is not found!</p>
            <button className='bg-blue-600 px-4 py-2 text-white rounded-md mt-4'>
                <Link to='/'>Back to home</Link>
            </button>
        </div>
    )
}

export default NotFound