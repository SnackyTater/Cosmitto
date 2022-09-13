import { 
    EN, EN_TYPE,
    VN, VN_TYPE 
} from '../constant/i18n'

import { store } from '../redux'

export const translate = (transKey) => {
    const langKey = store.getState(state => state.config.lang)
    console.log('aaaaa', VN)
    let keyList = {}
    // switch(langKey){
    //     case VN_TYPE:
    //         keyList = VN
    //         break
    //     case EN_TYPE:
    //         keyList = EN
    //         break
    //     default: 
    //         keyList = VN
    //         break
    // }

    // return keyList[transKey] ? keyList[transKey] : transKey
}