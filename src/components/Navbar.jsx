import React from 'react'
import { Link } from 'react-router-dom'
import TriggerDarkMode from './TriggerDarkMode';

const Navbar = () => {

  return (
    <nav className='bg-red-400'>
      <ul className='flex w-full justify-between my-3 p-2'>
        <li>Logo</li>
        <li>link1</li>
        <li>link2</li>
        <li><TriggerDarkMode/></li>
        <li className='px-3'>
          <Link to="/login">
            <button className='bg-indigo-700 py-1 px-4 rounded text-white shadow-md hover:bg-indigo-600'>
              Login
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar