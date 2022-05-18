import axios from 'axios'

export const createSell = async (data, success, error) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/sales',
        headers: { 'Content-Type': 'application/json' },
        data
    }
    await axios.request(options).then(success).catch(error)
}
