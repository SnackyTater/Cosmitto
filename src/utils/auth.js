export const checkAuthorization = () => localStorage.getItem('token') ? true : false;

export const saveToken = token => localStorage.setItem('token', token);

export const getToken = () => localStorage.getItem('token');

export const clearToken = () => localStorage.removeItem('token');

// export const saveCookie = (cookie) => {
//     const today = new Date();
//     today.setTime(today.getTime() + (3 * 60 * 60 * 1000));
//     const expire = `expires=${today.toUTCString()}`;
    
// }