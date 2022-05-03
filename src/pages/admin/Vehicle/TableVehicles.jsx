import { useVehicleList } from 'context/VehiclesList'
import { useState, useRef, useEffect } from 'react'
import RowVehicle from './RowVehicle'

export const TableVehicles = ({listVehiclesBack}) => {

    const { vehicleList } = useVehicleList()
    console.log(listVehiclesBack, "--------------");

    const [search, setSearch] = useState('')
    const [filterList, setFilterList] = useState(vehicleList)

    const form = useRef(null)

    useEffect(() => {
        setFilterList(vehicleList)
    }, [vehicleList,])

    useEffect(() => {
        setFilterList(vehicleList.filter((element) => {
            return JSON.stringify(element).toLowerCase().includes(search.toLowerCase())
        }))
    }, [search, vehicleList])


    const editSubmit = (e) => {
        e.preventDefault()
        const fd = new FormData(form.current)
        fd.forEach((value, key) => {
            console.log("Key: ", key, "Value:", value);
        })
    }


    return (
        <div className='flex flex-col items-center w-full'>
            <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search'
                className='border border-gray-700 mb-3 px-2 rounded-md focus:outline-none '
            />
            <div className='hidden md:flex w-full justify-center'>
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
                                filterList.map((vehicle) => {
                                    return (
                                        <RowVehicle key={vehicle._id} vehicle={vehicle} allVehicles={filterList} setVechicles={setFilterList} />
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </form>
            </div>
            <div className='flex flex-col w-full md:hidden'>
                {filterList.map((vehicle, index) => {
                    return (
                        <div key={vehicle._id} className="flex flex-col m-3 bg-gray-200  rounded-lg p-4 shadow-xl">
                            <div className='border-b border-gray-400 text-right mb-3'>
                                <span>{index + 1}</span>

                            </div>
                            <div className='flex flex-col'>
                                <span>{vehicle.vehName}</span>
                                <span>{vehicle.vehBrand}</span>
                                <span>{vehicle.vehModel}</span>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}