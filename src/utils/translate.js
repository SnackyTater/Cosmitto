import { 
    EN,
    EN_TYPE,
    VN,
    VN_TYPE 
} from '../constant/i18n'

export const translate = (langKey = 'VN', transKey) => {
    let keyList = {}
    switch(langKey){
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

    return keyList[transKey] ? keyList[transKey] : transKey
}