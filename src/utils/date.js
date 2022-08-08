import moment from 'moment'
import { isDate, isStringDate } from './type'

class dateUtils{
    constructor(date = new Date()){
        if(!isDate(date) || !isStringDate(date)) throw new Error('invalid input for constructor')
        this.date = new Date(date)
    }

    convertToTimeZone(timezone){
        return this.date.toLocaleString("en-US", {timezone})
    }

    format(string){
        return moment(date).format(string)
    }

    calulateAge(birthday){
        if(!isDate(birthday) || !isStringDate(birthday)) throw new Error('invalid date or date string')
        let diff_ms = Date.now() - new Date(birthday).getTime()
        let age_dt = new Date(diff_ms)
        return Math.abs(age_dt.getUTCFullYear() - 1970) 
    }
}

export default (value) => new dateUtils(value)

//jose' silva method