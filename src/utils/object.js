import { isObject } from './type'

export default class objectUtils{
    constructor(obj){
        if(!isObject(obj)) throw new Error('input value for constructor is invalid')
        this.object = obj
    }

    deleteKey(path){
        if(!path) throw new Error('invalid path')
        let currentObject = {...this.object}
        const parts = path.split(".")
        const last = parts.pop()
        for (const part of parts) {
        currentObject = currentObject[part]
        if (!currentObject) {
            return
        }
        }
        delete currentObject[last]
    }
}