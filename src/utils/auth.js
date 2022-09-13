export const saveToken = (token, maxAge) => {
    const now = new Date();
    const tomorrow = now.setTime(now.getTime() + (1000*60*60*24))
    const expire = `expires=${maxAge || tomorrow}`
    document.cookie = `token=${token};${expire};path=/`
}

export const getToken = (key = 'token') => {
    const decodedCookie = decodeURIComponent(document.cookie)
    if(!decodedCookie) return
    
    const cookieArray = decodedCookie.split(';')
    for(const cookie of cookieArray){
        const cookieWithNoWhiteSpace = cookie.replaceAll(' ', '')
        const holder = cookieWithNoWhiteSpace.split('=')
        const token = holder.filter((item, index) => index !== 0).reduce((prev, cur) => prev + cur)
        if(holder[0] === key) return token
    }
}

export const checkAuthorization = () => {
    const token = getToken()
    if(token) return true
    return false
}

export const deleteToken = () => {
    
}