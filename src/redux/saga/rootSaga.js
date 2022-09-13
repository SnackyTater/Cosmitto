import { takeLatest } from 'redux-saga/effects'
import { LOGIN } from '../action'

import { loginAsync } from './loginSaga'

export const rootSaga = function* () {
    yield takeLatest(LOGIN, loginAsync)
}