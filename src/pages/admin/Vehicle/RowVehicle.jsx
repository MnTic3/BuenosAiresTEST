import { Dialog, Tooltip } from '@mui/material';
import { useState } from 'react'
import { deleteData } from './utils/api';

const RowVehicle = ({ vehicle, allVehicles, setVechicles }) => {
    const [isEdit, setIsEdit] = useState()

    const [id] = useState(vehicle._id)
    const [name, setName] = useState(vehicle.vehName)
    const [model, setModel] = useState(vehicle.vehModel)
    const [brand, setBrand] = useState(vehicle.vehBrand)
    const [openDialog, setOpenDialog] = useState(false)

    const sendData = () => {
        if (name || model || brand) {
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
            return vehicle._id !== id
        })
        setVechicles(newList);
        setOpenDialog(false);
    }


    return (
        <tr>
            <td>
                {isEdit ?
                    <input
                        placeholder={vehicle.vehName}
                        type='text'
                        className='border border-gray-400 p-0.5 m-0.5 shadow-md rounded-sm focus:outline-none'
                        onChange={(e) => setName(e.target.value)}
                    />
                    :
                    vehicle.vehName}
            </td>
            <td>
                {isEdit ?
                    <input
                        placeholder={vehicle.vehModel}
                        type='number' max={2023} min={1992}
                        className='border border-gray-400 p-0.5 m-0.5 shadow-md rounded-sm'
                        onChange={(e) => setModel(e.target.value)}
                    />
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
                            <Tooltip title="Done" arrow>
                                <i
                                    onClick={sendData}
                                    className="fa-solid fa-circle-check text-green-700 hover:text-green-500 cursor-pointer" />
                            </Tooltip>
                            :
                            <Tooltip title="Edit" arrow>
                                <i
                                    onClick={() => setIsEdit(!isEdit)}
                                    className="fa-solid fa-pencil text-yellow-700 hover:text-yellow-500 cursor-pointer" />
                            </Tooltip>
                    }
                    {
                        isEdit ?
                            <Tooltip title="Cancel" arrow>
                                <i
                                    onClick={() => setIsEdit(!isEdit)}
                                    className="fa-solid fa-circle-xmark text-red-700 hover:text-red-500 cursor-pointer" />
                            </Tooltip>
                            :
                            <Tooltip title="Delete" arrow>
                                <i
                                    onClick={() => setOpenDialog(true)}
                                    className="fa-solid fa-trash text-red-700 hover:text-red-500 cursor-pointer" />
                            </Tooltip>
                    }
                </div>
                <Dialog open={openDialog}>
                    <h1
                        className='mx-5 my-4 font-semibold'
                    >
                        Do you want to delete the current item?
                    </h1>
                    <div className='flex justify-around my-4'>
                        <button
                            onClick={() => deleteData()}
                            className='px-5 py-2 bg-indigo-600 rounded-md text-white  hover:bg-indigo-500 font-semibold'>
                            Confirm
                        </button>
                        <button
                            onClick={() => setOpenDialog(false)}
                            className='px-5 py-2 bg-gray-600 rounded-md text-white  hover:bg-gray-500 font-semibold'>
                            Cancel
                        </button>
                    </div>
                </Dialog>
            </td>
        </tr>
    )
}

export default RowVehicle