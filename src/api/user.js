import axios from '../constant/axios'
import {
    USER as userURL
} from '../constant/api'

export const getUserInfo = (config = {}) => axios.get(userURL, config)

export const updateUserInfo = (body = {}, config = {}) => axios.put(userURL, body, config)