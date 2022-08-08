import React from 'react'
import PropTypes from 'prop-types'
import { SingleAvatar } from '../single'

export const GroupAvatar = ({ images = [], max = 2, size }) => {
  return (
    <div className='ga__container'>
      {
        images.map((item, index) => {
          if (index < max) return <SingleAvatar size={size} src={item} style={{ position: 'absolute', left: index * 50 }} />
          return <SingleAvatar size={size} />
        })
      }
    </div>
  )
}

GroupAvatar.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  max: PropTypes.number,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
}