import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from "../action"

const initialState = {
    error: false,
    loading: false,
    message: "",
    data: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loading: true,
                error: false,
                data: null,
                message: ""
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                message: action.payload.message
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                data: action.payload.data,
                message: action.payload.message
            }
        default:
            return state
    }
}
