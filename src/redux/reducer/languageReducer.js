import { UPDATE_LANGUAGE } from "../action"
import { VN_TYPE, EN_TYPE } from '~constants/i18n/langType'

const initialState = VN_TYPE

export const langReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LANGUAGE:
            return action.payload || VN_TYPE
        default:
            return state
    }
}
