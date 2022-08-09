import React, { useState } from 'react'
import { LightMode, DarkMode } from '@mui/icons-material'

import { toggleTheme, isThemeDark } from 'utils/theme'
import './style.scss'

export const ThemeButton = () => {
  const [isDark, setDark] = useState(isThemeDark())

  const handleChangeTheme = () => {
    toggleTheme()
    if (isDark) setDark(false)
    else setDark(true)
  }

  return (
    <button onClick={handleChangeTheme} className="theme-btn__container">
      <p>change theme</p>
      {
        isDark ? <DarkMode /> : <LightMode />
      }
    </button>
  )
}