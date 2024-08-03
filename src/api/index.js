import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:5000",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    }
})

export const get = async (api) => {
    const response = await instance.get(api)
    return response.data
}
export default instance