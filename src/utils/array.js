import { isArray, isFunction } from './type'

export default class arrayUtils{
    constructor(arr){
        if(!isArray(arr)) throw new Error('invalid input for constructor')
        this.array = arr
    }

    removeDuplicate(f){
        if(!isFunction(f)) return new Error('invalid input for params')
        const a = new Set()
        return this.array.filter(i => {
            const k = f(i)
            const n = a.has(k)
            if(!n) a.add(k)
            return n
        })
    }

    find(f){
        if(!isFunction(f)) return new Error('invalid input for params')

        for(let i = 0; i < this.array.length; i ++){
            const k = f(i)
            if(k) return this.array[i]
        }
    }
}