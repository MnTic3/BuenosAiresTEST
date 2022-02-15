import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-50 py-2 px-4 h-screen'>
      <div className='w-full flex items-start'>
        <Link to="/">
          <i className="fa-solid fa-house" />
        </Link>
      </div>
      <div className='w-full'>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout