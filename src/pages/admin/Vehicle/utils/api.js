import axios from "axios"

export const getAllVehicles = async () => {

    let vehicles = []

    const options = {
        method: "GET",
        url: 'http://localhost:5000/vehicles'
    }

    await axios
        .request(options)
        .then(function (response) {
            vehicles = response.data
        })
        .catch(function (err) {
            console.error(err);
        })

        return vehicles
}

export const createVehicle = async (newVehicle) => {
    const options = {
        method: "POST",
        url: "http://localhost:5000/vehicle/create",
        headers: { 'Content-Type': 'application/json' },
        data: {
            vehName: newVehicle.name,
            vehModel: newVehicle.model,
            vehBrand: newVehicle.brand
        }
    }

    await axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (err) {
        console.error(err);
    })
}