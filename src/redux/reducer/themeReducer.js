import { UPDATE_THEME } from '../action'

const initialState = {
    isLightTheme: true
}

export const themeReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_THEME:
            return {...state, isLightTheme: !state.isLightTheme}
        default:
            return state
    }
}