import React, { useEffect, useState } from 'react'

const Vehicles = () => {

  const [vehicleName, setVehicleName] = useState("")
  const [vehicleAmount, setvehicleAmount] = useState(0)
  const [vehicleModel, setVehicleModel] = useState("")
  const [ownerName, setOwnerName] = useState("")
  const [ownerId, setOwnerId] = useState("")

  const [age, setAge] = useState(0)
  const [isAdult, setIsAdult] = useState(false)

  useEffect(() => {
    if (age >= 18) {
      setIsAdult(true)

    } else {
      setIsAdult(false)
    }
  }, [age])


  useEffect(() => {
    console.log("Vehicle name: ", vehicleName);
  }, [vehicleName])


  return (
    <div className='flex flex-col w-full h-full'>

      <form action="" className='flex flex-col'>
        <input onChange={(e) => { setAge(e.target.value) }} type="number" name="age" id="age" className='outline-none border border-gray-400' />
        {
          isAdult ?
            <span className="bg-green-500">Usted es mayor de edad</span>
            :
            <span className="bg-red-500">No puedes ingresar</span>
        }
      </form>


    </div>
  )
}

export default Vehicles

/**
<div className='flex flex-col'>
        <h2 className='text-2xl font-extrabold text-gray-800 text-center m-5'>Vehicles' Administrator</h2>
        <button className='bg-indigo-700 text-white rounded-md p-2 mx-4 font-semibold w-40 '>New Vehicle</button>
      </div>
      <div className='grid grid-cols-2 p-10 '>
        <input
          onChange={(e) => { setVehicleName(e.target.value) }}
          className='border border-gray-600 p-2 rounded-md m-2 focus:outline-none'
          placeholder='Vehicle name'
          type="text" />
        <input
          onChange={(e) => { setvehicleAmount(e.target.value)}}
          placeholder='Vehicle amount'
          max='50' min='1'
          className='border border-gray-600 p-2 rounded-md m-2 focus:outline-none'
          type="number" />
        <input
          onChange={(e) => { setVehicleModel(e.target.value)}}
          placeholder='Vehicle modelo'
          className='border border-gray-600 p-2 rounded-md m-2 focus:outline-none'
          type="text" />
        <input
          onChange={(e) => { setOwnerName(e.target.value)}}
          placeholder='Owner'
          className='border border-gray-600 p-2 rounded-md m-2 focus:outline-none'
          type="text" />
        <input
          onChange={(e) => { setOwnerId(e.target.value)}}
          placeholder='Owner ID'
          className='border border-gray-600 p-2 rounded-md m-2 focus:outline-none'
          type="text" />

      </div>
      <button className='bg-green-600 rounded-md text-white font-semibold w-40 p-2 mx-4 '>Save</button>


 */