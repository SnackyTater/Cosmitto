const saveToLocalStorage = (key = 'default', value = '') => localStorage.setItem(key, value)
const getFromLocalStorage = (key) => localStorage.getItem(key)
const removeFromLocalStorage = (key) => localStorage.removeItem(key)