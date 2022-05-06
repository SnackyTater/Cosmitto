export const checkAuthorization = () => localStorage.getItem('token') ? true : false;

export const saveToken = token => localStorage.setItem('token', token);

export const getToken = () => localStorage.getItem('token');

export const clearToken = () => localStorage.removeItem('token');