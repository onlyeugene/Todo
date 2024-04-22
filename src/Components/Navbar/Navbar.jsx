import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex w-full justify-between items-center py-[3rem] md:px-[10rem] px-[1rem] bg-gray-100'>
        <Link to={'/'}>
            <h1>Task Duty</h1>
        </Link>

        <ul className=' hidden md:flex gap-[2rem]'>
            <Link to={'/AddTask'}>
                <li>Add Task</li>
            </Link>
            <Link to={'/NewTask'}>
                <li>New Task</li>
            </Link>
        </ul>
        <div className='relative -top-2 block md:hidden'>
            <div className='w-[2rem] absolute border top-0 right-[.5rem] border-black '></div>
            <div className='w-[2rem] absolute border top-2 right-[.5rem] border-black '></div>
            <div className='w-[2rem] absolute border top-4 right-[.5rem] border-black '></div>
        </div>
    </div>
  )
}

export default Navbar