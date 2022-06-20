import axios from '../constant/axios'
import { 
    ACCOUNT as accountURL,
    LOGIN as loginURL,
    EMAIL_VERIFICATE as verificateURL,
    FORGOT_PASSWORD as forgotURL,
    RESET_PASSWORD as resetURL,
} from '../constant/api'

export const getAccountInfo = (config = {}) => axios.get(accountURL, config)

export const createAccount = (body = {}, config = {}) => axios.post(accountURL, body, config)

export const updateAccount = (body = {}, config = {}) => axios.put(accountURL, body, config)

export const deleteAccount = (config = {}) => axios.delete(accountURL, config)

export const login = (body = {}, config = {}) => axios.post(loginURL, body, config)

export const sendEmailValidation = (body = {}, config = {}) => axios.post(verificateURL, body, config)

export const sendForgotPasswordEmail = (body = {}, config = {}) => axios.post(forgotURL, body, config)

export const resetPassword = (body = {}, config = {}) => axios.post(resetURL, body, config)