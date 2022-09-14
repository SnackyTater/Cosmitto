import React from 'react'
import { useFormikContext } from 'formik'

import './style.scss'

export const Submit = ({title, onPress, children}) => {
    const { handleSubmit } = useFormikContext()

    const handlePress = () => {
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
