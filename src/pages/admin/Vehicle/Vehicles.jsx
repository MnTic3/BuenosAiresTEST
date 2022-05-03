import { useVehicleList } from 'context/VehiclesList';
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormVehicle } from './FormVehicle';
import { TableVehicles } from './TableVehicles';
import { getAllVehicles } from './utils/api';

const Vehicles = () => {

  const [isClicked, setIsClicked] = useState(false)
  const [msgButton, setMsgButton] = useState("")
  const [todosCarros, setTodosCarros] = useState([])
  //debería crear un estado para que al momento de agregar un nuevo vehiculo
  //este cambie y se vuelva a renderizar la lista de los vehiculos.
  //deployQuery, setDeployQuery

  //Realmente la captura de los vehiculos (api getAllVehicles) debería estar ejecutandose en el PrivateLayout o aquí????
  //lo digo porque al momento que se vuelve a renderizar la sección de vehiculos, se borran y no vuelven a cargar
  //los vehiculos

  useEffect(() => {
    getVehicles()
  }, [])

  const getVehicles = async () => {
    setTodosCarros(await getAllVehicles());
  }

  useEffect(() => {
    if (isClicked) {
      setMsgButton("View All")
    } else {
      setMsgButton("Create")
    }
  }, [isClicked])

  return (
    <div className='flex flex-col w-full h-full justify-start'>
      <div className='flex flex-col'>
        <h2 className='text-3xl font-extrabold text-gray-800 text-center m-5'>Vehicles' Administrator</h2>
        <button
          onClick={() => { setIsClicked(!isClicked) }}
          className={`text-white bg-indigo-700 hover:bg-indigo-900 rounded-lg w-32 mx-2 p-2 self-end shadow-lg`}>
          {msgButton}
        </button>
      </div>
      {
        isClicked ? (
          <FormVehicle
            setShowAll={setIsClicked}
            listVeh={todosCarros}
            setVechicleList={setTodosCarros} />
        ) : (
          <TableVehicles
            listVehiclesBack={todosCarros}
            setVechicleList={setTodosCarros}
          />
        )
      }
      <ToastContainer
        position="bottom-center"
        autoClose={5000} />


    </div>
  )
}

export default Vehicles