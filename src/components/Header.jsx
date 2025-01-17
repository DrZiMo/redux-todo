import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex items-center justify-around p-3'>
            <div className="logo">
                <h1 className="text-xl font-bold">
                    Tiigsi Pages
                </h1>
            </div>

            <div className="menus flex items-center gap-3">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact us</Link>
                <Link to='/posts'>Posts</Link>

                <button className="px-4 py-3 rounded-md bg-blue-700 text-white">
                    Register Now
                </button>
            </div>
        </div>
    )
}

export default Header