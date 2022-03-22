import Sidebar from 'components/Sidebar'
import SidebarResponsive from 'components/SidebarResponsive'
import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateLayout = () => {
  return (
    <div className='flex w-screen h-screen'>
      <div className='flex flex-col md:flex-row flex-nowrap w-full h-full'>
        <Sidebar />
        <SidebarResponsive />
        <main className='flex w-full overflow-y-scroll items-center justify-center'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default PrivateLayout