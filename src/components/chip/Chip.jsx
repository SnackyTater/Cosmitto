import React from 'react'

export const Chip = ({ label, active }) => {
  return (
    <div className={`chip ${active ? 'active' : ''}`}>{label}</div>
  )
}
