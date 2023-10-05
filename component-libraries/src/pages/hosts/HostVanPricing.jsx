import { Box, Typography } from '@mui/material'
import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPricing = () => {
    const {van} = useOutletContext()
  return (
    <Box>  <Typography variant="h2">Price: ${van.price}/day</Typography></Box>
  )
}

export default HostVanPricing