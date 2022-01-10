import React from 'react'

import { Box, Card, CardContent, Typography } from '@mui/material'
import { yellow } from '@mui/material/colors'

function Legend(): JSX.Element {
  return (
    <Card
      variant="outlined"
      sx={{
        marginBottom: '20px',
        alignSelf: 'flex-start',
      }}
    >
      <CardContent>
        <Typography fontSize={14} color="text.secondary" gutterBottom>
          Legend
        </Typography>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box
            sx={{
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingRight: '20px',
              paddingLeft: '20px',
              backgroundColor: yellow[500],
              borderStyle: 'solid',
              borderColor: 'text.primary',
              borderWidth: '1px',
              marginRight: '20px',
              borderRadius: '3px',
            }}
          />
          <Typography sx={{ fontSize: 14 }} color="text.primary">
            Dry-Hopped
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default Legend
