import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export const SingleAvatar = ({ src = '', size = 32, style = {} }) => {
  return (
    <img
      className={'avatar'}
      src={src}
      alt={src}
      style={{
        width: size,
        height: size,
        ...style,
      }}
    />
  )
}

SingleAvatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
}