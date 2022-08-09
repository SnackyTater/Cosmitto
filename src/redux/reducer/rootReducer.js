import {combineReducers} from "redux"

import {counterReducer} from "./counterReducer"
import {themeReducer} from "./themeReducer"
import {authReducer} from "./authReducer"

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
    auth: authReducer
})
