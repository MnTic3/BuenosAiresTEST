import Sidebar from 'components/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateLayout = () => {
  return (
    <div className='flex w-screen h-screen'>
      <Sidebar />
      <main className='flex w-full overflow-y-scroll items-center justify-center'>
        <Outlet />
      </main>
    </div>
  )
}

export default PrivateLayout