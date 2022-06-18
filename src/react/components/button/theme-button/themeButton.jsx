import React from 'react'
import { connect } from 'react-redux'
import { IconButton, styled } from '@mui/material'
import { UPDATE_THEME } from '../../../../redux/action'

const themeButton = (props) => {
  const {dispatch, theme} = props

  handleClick = () => {

  }

  return (
    <div>themeButton</div>
  )
}
const mapStateToProps = state => state.theme
const connectedComponent = connect(mapStateToProps)(themeButton)
export { connectedComponent as themeButton }