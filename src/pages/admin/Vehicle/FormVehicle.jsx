import { useRef } from 'react'
import { toast } from 'react-toastify';
import { createVehicle } from './utils/api';

export const FormVehicle = ({ setShowAll }) => {

    const form = useRef(null)

    const sendBackEnd = async (e) => {
        e.preventDefault()
        const fd = new FormData(form.current)
        let newVehicle = {}
        fd.forEach((value, key) => {
            newVehicle[key] = value
        })

        await createVehicle(
            {
                vehName: newVehicle.name,
                vehModel: newVehicle.model,
                vehBrand: newVehicle.brand
            },
            (response) => {
                console.log(response.data);
                toast.success("Succesfull")
            },
            (error) => {
                console.error(error)
                toast.error("Error")
            }
        )

        setShowAll(false)
    }

    return (
        <div className='flex flex-col justify-center items-center '>
            <div className='flex flex-col p-10 '>
                <form ref={form} onSubmit={(e) => sendBackEnd(e)}>
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
                        className='w-60 bg-indigo-700 hover:bg-indigo-900 rounded-md text-white font-semibold p-2 mx-4 my-2 shadow-md'>
                        Save
                    </button>
                </form>
            </div >
        </div >
    )
}