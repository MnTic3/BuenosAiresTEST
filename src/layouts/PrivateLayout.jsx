import React, { useState } from 'react'
import Sidebar from 'components/Sidebar'
import SidebarResponsive from 'components/SidebarResponsive'
import { VehiclesListContext } from 'context/VehiclesList'
import { Outlet } from 'react-router-dom'
import { nanoid } from 'nanoid'

const PrivateLayout = () => {

  const [vehicleList, setVechicleList] = useState([
    {
      _id: nanoid(),
      vehName: "Corola",
      vehModel: 2020,
      vehBrand: "Toyota",
    },
    {
      _id: nanoid(),
      vehName: "Sandero",
      vehModel: 2015,
      vehBrand: "Renault",
    },
    {
      _id: nanoid(),
      vehName: "Mazda 3",
      vehModel: 2019,
      vehBrand: "Mazda",
    },
  ])
  
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