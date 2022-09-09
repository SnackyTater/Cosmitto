import React from 'react'
import { useFormikContext } from 'formik'

import './style.scss'

export const Submit = ({title, onPress, children}) => {
    const { handleSubmit, values, errors } = useFormikContext()

    const handlePress = () => {
      console.log('aaa', values, errors)
      if(onPress) onPress()
      handleSubmit()
    }

  return (
    <div
        className='fm-submit banner no-select'
        onClick={handlePress}
    >
        {title || children}
    </div>
  )
}
