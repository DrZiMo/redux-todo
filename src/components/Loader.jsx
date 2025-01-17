import React from 'react'
import { ImSpinner2 } from 'react-icons/im'

const Loader = () => {
  return (
    <div className='text-5xl text-black w-[97%] h-[97%] flex justify-center items-center animate-spin'>
        <ImSpinner2 />
    </div>
  )
}

export default Loader