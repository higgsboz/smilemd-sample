/* eslint-disable camelcase */
import React, { useMemo } from 'react'
import { DataGrid } from '@mui/x-data-grid'

import { Alert, Box } from '@mui/material'
import { yellow } from '@mui/material/colors'
import BeerName from './BeerName'
import BeerDescription from './BeerDescription'
import { useBeerData } from '../../hooks/useBeerData'

function BeerGrid() {
  const { isLoading, isError, data } = useBeerData()

  const [sortModel, setSortModel] = React.useState([
    {
      field: 'abv',
      sort: 'desc',
    },
  ])

  // Defines the cells for the columns and how they should be rendered
  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      renderCell: (params) => (
        <BeerName name={params.value.text} imageUrl={params.value.imageUrl} />
      ),
    },
    { field: 'tagline', headerName: 'Tagline', flex: 1 },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
      renderCell: (params) => (
        <BeerDescription
          description={params.value.text}
          hasLactose={params.value.hasLactose}
        />
      ),
    },
    {
      field: 'abv',
      headerName: 'ABV',
      flex: 0.2,
      renderCell: (params) => params.value ?? 'N/A',
    },
    {
      field: 'ibu',
      headerName: 'IBU',
      flex: 0.2,
      renderCell: (params) => params.value ?? 'N/A',
    },
  ]

  // Converts the data from the API call to data readable by DataGrid
  const dataGridBeerData = useMemo(() => {
    return (
      data?.map((beer) => {
        const dryHopped = !!beer.ingredients.hops.find(
          (hop) => hop?.add === 'dry hop'
        )

        const hasLactose =
          beer.method.twist?.toLowerCase().includes('lactose') ||
          !!beer.ingredients.hops.find(
            (hop) => hop?.name.toLowerCase() === 'lactose'
          )

        return (({ id, name, tagline, description, image_url, abv, ibu }) => ({
          id,
          name: {
            text: name,
            imageUrl: image_url,
          },
          tagline,
          description: {
            text: description,
            hasLactose,
          },
          abv,
          ibu,
          dryHopped,
        }))(beer)
      }) ?? []
    )
  }, [data])

  if (isError) {
    return (
      <Alert severity="error" data-testid="errorAlert">
        There was an issue loading the data. Please refresh the page
      </Alert>
    )
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        '& .dryhop': {
          bgcolor: yellow[500],
        },
        '& .dryhop.MuiDataGrid-row:hover': {
          bgcolor: yellow[200],
        },
        height: '100%',
      }}
      data-testid="beerDataGrid"
    >
      {!isError && (
        <DataGrid
          loading={isLoading}
          rows={dataGridBeerData}
          columns={columns}
          sortingOrder={['desc', 'asc']}
          sortModel={sortModel}
          onSortModelChange={(model) => setSortModel(model)}
          getRowClassName={(params) => (params.row.dryHopped ? 'dryhop' : '')}
        />
      )}
    </Box>
  )
}

export default BeerGrid
