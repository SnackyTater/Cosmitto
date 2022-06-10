import React from 'react'
import MuiChip from '@mui/material/Chip'
import { styled } from '@mui/material/styles'

const CustomChip = styled(MuiChip)(({ theme }) => ({
    backgroundImage: 'linear-gradient(45deg,#fd267a,#ff7854)'
  }));

export const Chip = (props) => {
  return (
    <CustomChip {...props}/>
  )
}
