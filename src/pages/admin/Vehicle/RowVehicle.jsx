import { Dialog, Tooltip } from '@mui/material';
import { useState } from 'react'
import { toast } from 'react-toastify';
import { deleteVehicle, editOneVehicle } from './utils/api';

const RowVehicle = ({ vehicle, setDeployQuery, deployQuery }) => {
    const [isEdit, setIsEdit] = useState()

    const [name, setName] = useState(vehicle.vehName)
    const [model, setModel] = useState(vehicle.vehModel)
    const [brand, setBrand] = useState(vehicle.vehBrand)
    const [openDialog, setOpenDialog] = useState(false)

    const sendData = async (id) => {
        await editOneVehicle(
            id,
            {
                vehName: name,
                vehModel: model,
                vehBrand: brand
            },
            (response) => {
                toast.success("It was edited");
                setIsEdit(!isEdit);
                setDeployQuery(true);
            },
            (err) => {
                toast.error("Error");
            }
        )
    }

    const deleteData = async (id) => {
        await deleteVehicle(
            id,
            (response) => {
                toast.success("It was delete");
                setOpenDialog(false);
                setDeployQuery(true);
            },
            (err) => {
                console.error(err);
                toast.error("Error");
            }
        );

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
                    {
                        isEdit ?
                            <Tooltip title="Done" arrow>
                                <i
                                    onClick={() => sendData(vehicle._id)}
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
                            onClick={() => deleteData(vehicle._id)}
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