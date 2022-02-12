import React, { useEffect, useState } from 'react'

const Vehicles = () => {

  const [vehicleType, setVehicleType] = useState("")

  useEffect(() => {
    console.log("Hola wapos");
  }, [])

  useEffect(() => {
    console.log("type: ", vehicleType);
  }, [vehicleType])

  const sendData = () => {
    console.log(vehicleType);
  }

  return (
    <div className='flex flex-col '>
      <input onChange={(e)=>{setVehicleType(e.target.value)}} value={vehicleType} type="text" placeholder='Tipo Vehiculo ' />
      <input type="text" placeholder='Propietario Vehiculo' />
      <input type="text" placeholder='Placa Vehiculo' />
      <button onClick={sendData} type="submit">Send</button>
    </div>
  )
}

export default Vehicles