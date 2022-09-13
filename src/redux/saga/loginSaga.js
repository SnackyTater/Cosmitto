import { put, call } from 'redux-saga/effects'
import { login } from '~api/account'
import {  
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../action'

export function* loginAsync(action){
    try{
        yield put({ type: LOGIN_REQUEST })

        const response = yield call(async() => {
            const {body, config} = action.payload
            return await login(body, config)
        })

        put({ type: LOGIN_SUCCESS, payload: response.data })
    } catch (err) {
        const {message, data} = err
        yield put({ type: LOGIN_FAILURE, payload: {message, data} })
    }
}