import React from 'react'
import { Typography, Link } from '@mui/material'

const Footer = () => {
  return (
    <Typography variant="body2" color='#fff' align="center" padding='30px' bgcolor='#252525'>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Vanlife
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Footer