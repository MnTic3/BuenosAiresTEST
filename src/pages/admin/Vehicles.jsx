import React, { useEffect, useState } from 'react'

const Vehicles = () => {

  const [vehicleType, setVehicleType] = useState("")
  const [age, setAge] = useState(0)
  const [isAdult, setisAdult] = useState(true)

  useEffect(() => {
    //console.log("Hola wapos");
  }, [])

  useEffect(() => {

    if (age >= 18) {
      setisAdult(true)
    } else {
      setisAdult(false)
    }
  }, [age])

  const sendData = () => {
    console.log(vehicleType);
  }
  /**
   * <input onChange={(e)=>{setVehicleType(e.target.value)}} value={vehicleType} type="text" placeholder='Tipo Vehiculo ' />
      <input type="text" placeholder='Propietario Vehiculo' />
      <input type="text" placeholder='Placa Vehiculo' />
      <button onClick={sendData} type="submit">Send</button>
   * 
  */



  return (
    <div className='flex flex-col '>
      <form className='flex flex-col'>
        <label>
          Please, write your age
          <input
            onChange={(e) => { setAge(e.target.value) }}
            max='99' min='1'
            name='age'
            value={age}
            type='number'
            className='border border-gray-500 rounded p-0.5 mx-3 appearance-none focus:outline-none'
          />
        </label>
        <button onClick={()=>{console.log("")}} className='border bg-indigo-600 border-gray-400 text-white rounded my-3 py-2'>Enter</button>
        {
          isAdult ? <span className='text-2xl text-green-600'>
            ¡You are an adult!
          </span> : <span className='text-2xl text-red-600'>
            ¡You aren't an adult!
          </span>
        }


      </form>
    </div>
  )
}

export default Vehicles