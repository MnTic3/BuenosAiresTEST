import React, { useEffect, useState } from 'react'
import Sidebar from 'components/Sidebar'
import SidebarResponsive from 'components/SidebarResponsive'
import { VehiclesListContext } from 'context/VehiclesList'
import { Outlet } from 'react-router-dom'
import { getAllVehicles } from 'pages/admin/Vehicle/utils/api'

const PrivateLayout = () => {

  const [vehicleList, setVechicleList] = useState([])

  useEffect(() => {
    getVehicles()
  }, [])

  const getVehicles = async () => {
    setVechicleList(await getAllVehicles());
  }

  return (
    <VehiclesListContext.Provider value={{ vehicleList, setVechicleList }}>
      <div className='flex w-screen h-screen'>
        <div className='flex flex-col md:flex-row flex-nowrap w-full h-full'>
          <Sidebar />
          <SidebarResponsive />
          <main className='flex w-full overflow-y-scroll items-center justify-center'>
            <Outlet />
          </main>
        </div>
      </div>
    </VehiclesListContext.Provider>
  )
}

export default PrivateLayout