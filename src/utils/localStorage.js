export const saveToLocalStorage = (key = 'default', value = '') => localStorage.setItem(key, value)
export const getFromLocalStorage = (key) => localStorage.getItem(key)
export const removeFromLocalStorage = (key) => localStorage.removeItem(key)