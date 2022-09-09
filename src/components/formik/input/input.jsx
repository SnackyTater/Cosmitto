import React from 'react'
import { useFormikContext } from 'formik'
import { Error } from '../error'
import './style.scss'

export const Input = ({label, placeholder, name, onChange, disabled}) => {
    const {values, errors, touched, setFieldValue} = useFormikContext()

    const handleChange = (e) => {
        setFieldValue(name, e.target.value)
        if(onChange) onChange(e.target.value)
    }

    return (
        <div>
            {
                (label) ? <p className='py-1 fs-14 m-0'>{label}</p> : null
            }
            <input
                className='fm-input-field'
                disabled={disabled} 
                value={values[name]}
                placeholder={placeholder}
                onChange={handleChange}
            />
            {
                (errors[name] && touched[name]) ? <Error className={'px-2 d-inline-block'}>{errors[name]}</Error> : null
            }
        </div>
    )
}