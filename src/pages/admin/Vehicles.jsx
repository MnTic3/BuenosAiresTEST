import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const listVehiclesBack = [
  {
    vehName: "Corola",
    vehModel: 2020,
    vehBrand: "Toyota",
  },
  {
    vehName: "Sandero",
    vehModel: 2015,
    vehBrand: "Renault",
  },
  {
    vehName: "Mazda 3",
    vehModel: 2019,
    vehBrand: "Mazda",
  },
]

const Vehicles = () => {

  //const [colorBtn, setColorBtn] = useState("green")
  const [isClicked, setIsClicked] = useState(false)
  const [msgButton, setMsgButton] = useState("")
  const [vehicles, setVehicles] = useState(listVehiclesBack)

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
            listVeh={vehicles}
            setListVehicles={setVehicles} />
        ) : (
          <TableVehicles
            listVehiclesBack={vehicles} />
        )

      }

      <ToastContainer
        position="bottom-center"
        autoClose={5000} />


    </div>
  )
}

const FormVehicle = ({ setShowAll, listVeh, setListVehicles }) => {

  const form = useRef(null)

  const sendBackEnd = (e) => {
    e.preventDefault()
    const fd = new FormData(form.current)
    let newVehicle = {}

    fd.forEach((value, key) => {
      newVehicle[key] = value
    })

    setShowAll(false)
    setListVehicles([
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

const TableVehicles = ({ listVehiclesBack }) => {

  return (
    <div className='flex flex-col items-center'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {
            listVehiclesBack.map((vehicle) => {
              return (
                <tr>
                  <td>{vehicle.vehName}</td>
                  <td>{vehicle.vehModel}</td>
                  <td>{vehicle.vehBrand}</td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  )
}


export default Vehicles