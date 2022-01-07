import React from 'react'
import { Box } from '@mui/material'
import { Warning } from '@mui/icons-material'

type Props = {
  description: string
  hasLactose: boolean
}

function BeerDescription({ description, hasLactose }: Props): JSX.Element {
  return (
    <div>
      <span>{description}</span>
      {hasLactose && (
        <Box
          sx={{
            mt: 1,
            mr: 1,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Warning color="warning" />
          <span style={{ color: 'red' }}>Contains Lactose</span>
        </Box>
      )}
    </div>
  )
}

export default BeerDescription
