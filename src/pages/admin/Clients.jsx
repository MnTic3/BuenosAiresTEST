import { nanoid } from 'nanoid'
import React, { useEffect, useRef, useState } from 'react'
import { getAllVehicles } from './Vehicle/utils/api'
import { createSell } from './Vehicle/utils/Sells/api'
import { getAllUsers } from './Vehicle/utils/Users/api'

const Clients = () => {

  const form = useRef(null)
  const [sellers, setSellers] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [vehiclesTable, setVehiclesTable] = useState([])
  const [created, setCreated] = useState(false)

  useEffect(() => {
    const fetchSellers = async () => {
      await getAllUsers(
        (response) => {
          setSellers(response.data);
        },
        (err) => {
          console.error(err);
        }
      );
    }
    const fetchVehicles = async () => {
      await getAllVehicles(
        (response) => {
          setVehicles(response.data)
        },
        (err) => {
          console.error(err);
        }
      )
    }
    fetchVehicles()
    fetchSellers()
  }, [])

  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current)

    const formData = {};
    fd.forEach((value, key) => {
      formData[key] = value;
    })

    const vehiclesToBuy = Object.keys(formData)
      .map((k) => {
        if (k.includes('vehicle')) {
          return vehiclesTable.filter((veh) => veh._id === formData[k])[0]
        }
        return null
      })
      .filter((v) => v)

    Object.keys(formData)
      .forEach((key) => {
        if (key.includes('quantity')) {
          const index = parseInt(key.split('_')[1])
          vehiclesToBuy[index]["quantity"] = formData[key]
        }
      })

    const sell = {
      seller: sellers.filter((seller) => seller._id === formData.seller)[0],
      vehicles: vehiclesToBuy,
      price: formData.price
    }

    await createSell(
      sell,
      (response) => { setCreated(true) },
      (err) => { console.error(err); });
  }

  return (
    <div>
      <form ref={form} onSubmit={submit} className='flex flex-col text-gray-900'>
        <label htmlFor='sellers' className='flex flex-col'>
          <span className='text-2xl '>Seller</span>
          <select
            name="seller"
            defaultValue=""
            required
            className='px-4 py-2 bg-white border border-gray-400 rounded-sm shadow-md cursor-pointer'>
            <option value="" disabled>
              Select an agent
            </option>
            {sellers.map((seller) => {
              return <option value={seller._id} key={nanoid()}>{`${seller.name} ${seller.lastname}`}</option>

            })}
          </select>
        </label>


        {/**Vehicles */}
        <Table
          vehicles={vehicles}
          setVehicles={setVehicles}
          setVehiclesTable={setVehiclesTable}
          created={created}
          setCreated={setCreated}
        />


        <label htmlFor="price">
          <span className='text-2xl'>Price: </span>
          <input
            type="number"
            name="price"
            className='border border-gray-600 p-2 rounded-md m-2 shadow-md focus:outline-none'
          />
        </label>
        <button type="submit"
          className='bg-indigo-700 hover:bg-indigo-900 rounded-md text-white font-semibold p-2 mx-4 my-2 shadow-md'>
          Sell
        </button>
      </form>
    </div>
  )
}

const Table = ({ vehicles, setVehicles, setVehiclesTable, created, setCreated }) => {
  const [vehicleAdded, setVehicleAdded] = useState({})
  const [rowsTable, setRowsTable] = useState([])

  useEffect(() => {
    setVehiclesTable(rowsTable)
  }, [rowsTable, setVehiclesTable])

  useEffect(() => {
    setRowsTable([])
  }, [created])

  const addVehicle = () => {
    if (vehicleAdded._id) {
      console.log("added");
      setRowsTable([...rowsTable, vehicleAdded])
      setVehicles(vehicles.filter((vehicle) => vehicle._id !== vehicleAdded._id))
      setVehicleAdded({})
    }
  }

  const deleteVehicle = (vehicleDelete) => {
    setRowsTable(rowsTable.filter((veh) => veh._id !== vehicleDelete._id))
    setVehicles([...vehicles, vehicleDelete])
  }

  return (
    <div className='flex'>
      <label htmlFor='vehicle' className='flex flex-col my-3'>
        <span className='text-2xl '>Vehicle</span>
        <div className='flex'>
          <select
            name="vehicle"
            value={vehicleAdded._id ?? ''}
            onChange={(e) => setVehicleAdded(vehicles.filter(veh => veh._id === e.target.value)[0])}
            className='px-4 py-2 w-full bg-white border border-gray-400 rounded-sm shadow-md cursor-pointer'>
            <option value='' disabled>Select a vehicle</option>
            {vehicles.map((vehicle) => {
              return (
                <option key={nanoid()} value={vehicle._id} >
                  {`${vehicle.vehName} ${vehicle.vehBrand} ${vehicle.vehModel}`}
                </option>
              )
            })}
          </select>
          <button
            type='button'
            onClick={() => addVehicle()}
            className='bg-indigo-700 p-2 text-white font-semibold rounded-full mx-10'
          >
            Add
          </button>
        </div>
        <table className='table my-10'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Number</th>
              <th>Options</th>
              <th className='hidden'>Input</th>
            </tr>
          </thead>
          <tbody>
            {rowsTable.map((row, index) => {
              return (
                <tr key={row._id}>
                  <td>{row._id}</td>
                  <td>{row.vehName}</td>
                  <td>{row.vehBrand}</td>
                  <td>{row.vehModel}</td>
                  <td>
                    <input type="number"
                      name={`quantity_${index}`}
                      min={1} max={20}
                      defaultValue={1}
                      className='bg-gray-100 w-20 appearance-none focus:outline-none'
                    />
                  </td>
                  <td>
                    <i
                      onClick={() => deleteVehicle(row)}
                      className='fa-solid fa-trash text-red-700 hover:cursor-pointer' />
                  </td>
                  <td className='hidden'>
                    <input hidden defaultValue={row._id} name={`vehicle_${index}`} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </label>
    </div>
  )
}


export default Clients