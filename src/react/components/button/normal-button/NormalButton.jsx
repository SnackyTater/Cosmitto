import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export const NormalButton = ({ label, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className='btn'
    >{label || children}</button>
  )
}

NormalButton.pr