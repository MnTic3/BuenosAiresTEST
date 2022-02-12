import React, { useEffect, useState } from 'react'

const Vehicles = () => {

  



  return (
    <div className='flex flex-col w-full h-full'>
      <div className='flex flex-col'>
        <h2 className='text-2xl font-extrabold text-gray-800 text-center m-5'>Vehicles' Administrator</h2>
        <button className='bg-indigo-700 text-white rounded-md p-2 mx-4 font-semibold w-40 '>New Vehicle</button>
      </div>
      <div className='grid grid-cols-2 p-10 '>
        <input className='border border-gray-600 p-2 rounded-md m-2 focus:outline-none' type="text" />
        <input className='border border-gray-600 p-2 rounded-md m-2 focus:outline-none' type="number" />
        <input className='border border-gray-600 p-2 rounded-md m-2 focus:outline-none' type="text" />
        <input className='border border-gray-600 p-2 rounded-md m-2 focus:outline-none' type="text" />
        <input className='border border-gray-600 p-2 rounded-md m-2 focus:outline-none' type="text" />

      </div>
        <button className='bg-green-600 rounded-md text-white font-semibold w-40 p-2 mx-4 '>Save</button>
    </div>
  )
}

export default Vehicles