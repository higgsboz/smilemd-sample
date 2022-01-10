/* eslint-disable camelcase */
import React from 'react'
import '../styles/App.css'

import { Box, Container } from '@mui/material'
import BeerGrid from './BeerGrid'

function App(): JSX.Element {
  return (
    <div className="container">
      <Container maxWidth="lg" sx={{ height: '100%' }}>
        <Box display="flex" flexDirection="column" height="100%">
          <Box textAlign="center">
            <h1>Brewdog Beer List</h1>
          </Box>
          <BeerGrid />
        </Box>
      </Container>
    </div>
  )
}

export default App
