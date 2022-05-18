import axios from "axios"

export const getAllVehicles = async (success, error) => {
    const options = {
        method: "GET",
        url: 'http://localhost:5000/vehicles/'
    }
    await axios
        .request(options)
        .then(success)
        .catch(error)

}

export const createVehicle = async (data, success, error) => {
    const options = {
        method: "POST",
        url: "http://localhost:5000/vehicles/",
        headers: { 'Content-Type': 'application/json' },
        data
    }

    await axios.request(options).then(success).catch(error)
}

export const editOneVehicle = async (id, data, success, error) => {
    const options = {
        method: "PATCH",
        url: `http://localhost:5000/vehicles/${id}/`,
        headers: { 'Content-Type': 'application/json' },
        data
    }
    await axios.request(options).then(success).catch(error)
}

export const deleteVehicle = async (id, success, error) => {
    const options = {
        method: "DELETE",
        url: `http://localhost:5000/vehicles/${id}/`,
        headers: { 'Content-Type': 'application/json' }
    }
    await axios.request(options).then(success).catch(error)
}