import { isArray, isFunction } from './type'

export default class arrayUtils{
    constructor(arr){
        if(!isArray(arr)) throw new Error('input value for constructor is not an array')
        this.array = arr
    }

    removeDuplicate(f){
        
        if(!isFunction(f)) return new Error('type of value you put in to constructor is not an array')

        const a = new Set()
        return this.array.filter(i => {
            const k = f(i)
            const n = a.has(k)
            if(!n) a.add(k)
            return n
        })
    }
}