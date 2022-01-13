import React from 'react'
import { Box } from '@mui/material'

function BeerName({ name, imageUrl }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}
    >
      <Box
        sx={{
          mr: 1,
          display: 'flex',
          flex: 0.1,
          justifyContent: 'center',
        }}
      >
        <img src={imageUrl} alt="Beer_Image" height={50} />
      </Box>
      <Box flex={0.9} mr={1}>
        {name}
      </Box>
    </Box>
  )
}

export default BeerName
