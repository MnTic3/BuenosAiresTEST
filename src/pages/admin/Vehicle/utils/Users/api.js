import axios from "axios"

export const getAllUsers = async (success, error) => {
    const options = { method: 'GET', url: 'http://localhost:5000/users' };
    await axios.request(options).then(success).catch(error);
}