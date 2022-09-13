import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from './reducer'
import { rootSaga } from './saga'

const sagaMiddleWare = createSagaMiddleware()
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)))
sagaMiddleWare.run(rootSaga)