import axios from '~constants/axios'
import {
    USER as userURL
} from '~constants/api'

export const getUserInfo = (config = {}) => axios.get(userURL, config)

export const updateUserInfo = (body = {}, config = {}) => axios.put(userURL, body, config)