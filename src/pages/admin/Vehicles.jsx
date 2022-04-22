import { useVehicleList } from 'context/VehiclesList';
import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Vehicles = () => {

  const { vehicleList } = useVehicleList()

  const [isClicked, setIsClicked] = useState(false)
  const [msgButton, setMsgButton] = useState("")
  const [todosCarros, setTodosCarros] = useState(vehicleList)

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
          className={`text-white bg-red-500 rounded-lg w-32 mb-10 mx-2 p-2 self-end shadow-lg`}>
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

const FormVehicle = ({ setShowAll, listVeh, setVechicleList }) => {

  const form = useRef(null)

  const sendBackEnd = (e) => {
    e.preventDefault()
    const fd = new FormData(form.current)
    let newVehicle = {}

    fd.forEach((value, key) => {
      newVehicle[key] = value
    })

    setShowAll(false)
    setVechicleList([
      ...listVeh,
      {
        vehName: newVehicle.name,
        vehModel: newVehicle.model,
        vehBrand: newVehicle.brand,
      }
    ])
    toast.success("Agregado correctamente")
  }

  return (
    <div className='flex flex-col justify-center items-center '>
      <div className='flex flex-col'>
        <button
          type='button'
          className='bg-indigo-700 text-white rounded-md p-2 mx-4 font-semibold w-40 shadow-lg'>
          New Vehicle
        </button>
      </div>
      <div className='flex flex-col p-10 '>
        <form ref={form} onSubmit={sendBackEnd}>
          <label className='flex flex-col font-bold text-gray-700' htmlFor="name">
            Name
            <input
              name='name'
              required
              placeholder='Name'
              className='border border-gray-600 p-2 rounded-md m-2 focus:outline-none'
              type="text"
            />
          </label>
          <label className='flex flex-col font-bold text-gray-700' htmlFor="model">
            Model
            <input
              placeholder='2022'
              name='model'
              max={2023} min={1992}
              className='border border-gray-600 p-2 rounded-md m-2 focus:outline-none'
              type="number"
              required
            />
          </label>
          <label className='flex flex-col font-bold text-gray-700' htmlFor="brand">
            Brand
            <select
              className='bg-white border border-gray-600 p-2 rounded-md m-2 outline-none'
              name="brand"
              required
            >
              <option disabled>Select a brand</option>
              <option value="Toyota">Toyota</option>
              <option value="Renault">Renault</option>
              <option value="Mazda">Mazda</option>
              <option value="Ford">Ford</option>
              <option value="BMW">BMW</option>
            </select>
          </label>
          <button
            type='submit'
            className='w-60 bg-green-600 rounded-md text-white font-semibold p-2 mx-4 my-2 shadow-md'>
            Save
          </button>
        </form>
      </div >
    </div >
  )
}

const TableVehicles = ({ listVehiclesBack, setVechicleList }) => {

  const form = useRef(null)

  useEffect(() => {
    setVechicleList(listVehiclesBack)
  }, [listVehiclesBack])


  const editSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData(form.current)
    fd.forEach((value, key) => {
      console.log("Key: ", key, "Value:", value);
    })
  }

  return (
    <div className='flex flex-col items-center w-full'>
      <form ref={form} onSubmit={editSubmit} className='flex flex-col w-4/5'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Model</th>
              <th>Brand</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {
              listVehiclesBack.map((vehicle) => {
                return (
                  <RowVehicle key={vehicle._id} vehicle={vehicle} allVehicles={listVehiclesBack} setVechicles={setVechicleList} />
                )
              })
            }

          </tbody>
        </table>
      </form>
    </div>
  )
}


const RowVehicle = ({ vehicle, allVehicles, setVechicles }) => {
  const [isEdit, setIsEdit] = useState()

  const [id, setId] = useState(vehicle._id)
  const [name, setName] = useState(vehicle.vehName)
  const [model, setModel] = useState(vehicle.vehModel)
  const [brand, setBrand] = useState(vehicle.vehBrand)

  const sendData = () => {

    if (name || model && brand) {
      vehicle.vehName = name
      vehicle.vehModel = model
      vehicle.vehBrand = brand
      setIsEdit(!isEdit)
    } else {
      setIsEdit(true)
    }
  }

  const deleteData = () => {

    const newList = allVehicles.filter((vehicle) => {
      return vehicle._id != id
    })

    console.log(newList);

    setVechicles(newList)

  }

  return (
    <tr>
      <td>
        {isEdit ?
          <input placeholder={vehicle.vehName} type='text' className='border border-gray-400 p-0.5 m-0.5 shadow-md rounded-sm focus:outline-none' onChange={(e) => setName(e.target.value)} />
          :
          vehicle.vehName}
      </td>
      <td>
        {isEdit ?
          <input placeholder={vehicle.vehModel} type='number' max={2023} min={1992} className='border border-gray-400 p-0.5 m-0.5 shadow-md rounded-sm' onChange={(e) => setModel(e.target.value)} />
          :
          vehicle.vehModel}
      </td>
      <td>
        {isEdit ?
          <select
            name="brand"
            placeholder={vehicle.vehBrand}
            className='border border-gray-400 bg-white p-0.5 m-0.5 shadow-md rounded-sm cursor-pointer'
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="Toyota">Toyota</option>
            <option value="Renault">Renault</option>
            <option value="Mazda">Mazda</option>
            <option value="Ford">Ford</option>
            <option value="BMW">BMW</option>
          </select>

          :
          vehicle.vehBrand}
      </td>
      <td>
        <div className='flex w-full justify-around'>
          {/*
            PUT/PATCH DIFERENCIAS:
            PUT ACTUALZIA TODOS LOS CAMPOS DE UN REGISTRO
            PATCH ACTUALIZA UNO O VARIOS
          
          */}
          {
            isEdit ?
              <i onClick={sendData} className="fa-solid fa-circle-check text-green-700 hover:text-green-500 cursor-pointer" />
              :
              <i onClick={() => setIsEdit(!isEdit)} className="fa-solid fa-pencil text-yellow-700 hover:text-yellow-500 cursor-pointer" />
          }
          {
            isEdit ?
              <i onClick={() => setIsEdit(!isEdit)} className="fa-solid fa-circle-xmark text-red-700 hover:text-red-500 cursor-pointer" />
              :
              <i onClick={deleteData} className="fa-solid fa-trash text-red-700 hover:text-red-500 cursor-pointer" />
          }
        </div>
      </td>
    </tr>
  )
}


export default Vehicles