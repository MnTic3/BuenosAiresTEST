import {createContext, useContext} from 'react'

export const VehiclesListContext = createContext(null)

export const useVehicleList = () => {
    return useContext(VehiclesListContext)
}