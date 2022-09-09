import React from 'react'
import { useFormikContext } from 'formik'
import { Error } from '../error'
import './style.scss'

export const Select = ({label, placeholder, name, onChange, labelField, valueField, options, disabled}) => {
    const {values, errors, touched ,setFieldValue} = useFormikContext()

    const handleChange = (e) => {
        setFieldValue(e.target.value)
        if(onChange) onChange(e.target.value)
    }

    return (
        <div>
            {
                (label) ? <p className='py-3 fs-14'>{label}</p> : null
            }
            <select
                className='fm-select-field' 
                value={values[name]}
                placeholder={placeholder}
                onChange={handleChange}
                disabled={disabled}
            >
                <option hidden>choose here</option>
                {
                    options?.map((option, index) => <option value={option[valueField]} >{option[labelField]}</option>)
                }
            </select>
            {
                (errors[name] && touched[name]) ? <Error>{errors[name]}</Error> : null
            }
        </div>
    )
}