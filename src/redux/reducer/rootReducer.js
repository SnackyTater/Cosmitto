import {combineReducers} from "redux"

import { counterReducer } from "./counterReducer"
import { langReducer } from "./languageReducer"
import { authReducer } from "./authReducer"

export const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    language: langReducer
})
