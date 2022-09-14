import { 
    EN, EN_TYPE,
    VN, VN_TYPE 
} from '../constant/i18n'

import { store } from '../redux'

export const translate = (transKey = '') => {
    const { language } = store.getState()
    
    let keyList = {}
    switch(language){
        case VN_TYPE:
            keyList = VN
            break
        case EN_TYPE:
            keyList = EN
            break
        default: 
            keyList = VN
            break
    }

    return keyList[transKey] || transKey
}