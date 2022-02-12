import React from 'react'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <div className="h-full overflow-y-scroll bg-blue-400">
        <main className='h-full'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default PublicLayout