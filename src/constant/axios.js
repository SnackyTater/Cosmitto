import axios from 'axios'
import { getToken } from '~utils/auth'
import { history } from './history'

// const host = process.env.NODE_ENV === 'production' ? 'localhost' : 'localhost'
const host = process.env.HOST
const port = process.env.PORT
const URL = process.env.NODE_ENV === 'production' ? host : `http://${host}:${port}`

const instance = axios.create({
    baseURL: URL,
    headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Accept': '*/*'
    }
})

instance.interceptors.response.use((res) => res, (error) => {
    if(error.response){
        const status = error.response.status
        if(status === 401 || status === 403){
            history.push('/home')
        } else {
            const {data, message} = error.response.data

            const err = new Error(message)
            err.server = true
            err.data = data
            throw err
        }
    } else {
        const err = new Error("can't connect to server, try again later")
        err.server = false
        throw err
    }
})

export default instance