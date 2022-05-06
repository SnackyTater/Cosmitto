import axios from 'axios'
import {getToken} from '../../utils/auth'

// const host = process.env.NODE_ENV === 'production' ? 'localhost' : 'localhost'
const host = 'http://localhost'
const port = 5000
const URL = `${host}:${port}`

const instance = axios.create({
    baseURL: URL,
    headers: {
        'Authorization' : `Bearer ${getToken()}`,
        'Accept': '*/*'
    }
})

export default instance