export const isObject = (obj) => obj && typeof obj === 'object' && obj.constructor === Object;

export const isArray = (arr) => Array.isArray(arr)

export const isString = (str) => typeof str === 'string'

export const isNumber = (num) => typeof num === 'number'

export const isFloat = (num) => num % 1 !== 0

export const isInt = (num) => Number.isInteger(num)

export const isBool = (bool) => typeof bool === 'boolean'

export const isDate = (date) => date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)

export const isStringDate = (str) => {
    if(!isString(str)) throw new Error('this is not event a string')
    return new Date(str).toString() === 'Invalid Date' ? false : true
}

export const isFunction = (func) => typeof func === 'function'