import axios from 'axios'

let request = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export default request
