/* eslint-disable camelcase */
import React from 'react'
import '../../styles/App.css'

import { Box, Container, Grid } from '@mui/material'

import BeerGrid from '../Beer/BeerGrid'
import Legend from '../Beer/Legend'

function Home(): JSX.Element {
  return (
    <div className="container">
      <Container maxWidth="xl" sx={{ height: '100%', pb: '20px' }}>
        <Box display="flex" flexDirection="column" height="100%">
          <Box textAlign="center">
            <h1>Brewdog Beer List</h1>
          </Box>

          <Grid container spacing={2} height="100%">
            <Grid item xs={8} sm={9} md={9} lg={10} xl={10}>
              <BeerGrid />
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg={2} xl={2}>
              <Legend />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default Home
