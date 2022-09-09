import React from 'react'
import { Required } from '~components/required'
import './style.scss'

export const Checkbox = ({value, onCheck, label, isRequired}) => {
  return (
    <div>
        <input
            className='checkbox'
            type={'checkbox'}
            value={value}
            onClick={onCheck}
        />
        <label className='checkbox__label'>
            <span>{label}</span>
            {isRequired && <Required/>}
        </label>
    </div>
  )
}
