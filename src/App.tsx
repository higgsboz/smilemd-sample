/* eslint-disable camelcase */
import React, { useMemo } from 'react'

import CircularProgress from '@mui/material/CircularProgress'
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridSortDirection,
  GridSortModel,
} from '@mui/x-data-grid'

import { QueryClient, useQuery } from 'react-query'
import { Box, IconButton, Tooltip } from '@mui/material'
import { Info } from '@mui/icons-material'
import { getBeer } from './queries/Beer'
import { Beer } from './models/Beer'

const queryClient = new QueryClient()

function App(): JSX.Element {
  const queryState = useQuery<Beer[] | null, Error>('beer', () => getBeer())

  const [sortModel, setSortModel] = React.useState<GridSortModel>([
    {
      field: 'abv',
      sort: 'desc' as GridSortDirection,
    },
  ])

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      renderCell: (params) => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {params.value.hasLactose && (
            <Tooltip title="Contains Lactose">
              <IconButton>
                <Info />
              </IconButton>
            </Tooltip>
          )}
          <Box sx={{ mr: 2 }}>
            <img
              src={params.value.image_url}
              alt="Beer_Image"
              width={20}
              height={50}
            />
          </Box>
          <span>{params.value.name}</span>
        </Box>
      ),
    },
    { field: 'tagline', headerName: 'Tagline', flex: 1 },
    { field: 'description', headerName: 'Description', flex: 1 },
    { field: 'abv', headerName: 'ABV', flex: 1 },
    { field: 'ibu', headerName: 'IBU', flex: 1 },
  ]

  const rawBeerToDataGrid: GridRowsProp = useMemo(() => {
    return (
      queryState.data?.map((beer) => {
        const dryHopped = !!beer.ingredients.hops.find(
          (hop) => hop.add === 'dry hop'
        )

        const hasLactose =
          beer.method.twist?.toLowerCase().includes('lactose') ||
          !!beer.ingredients.hops.find(
            (hop) => hop.name.toLowerCase() === 'lactose'
          )

        return (({ id, name, tagline, description, image_url, abv, ibu }) => ({
          id,
          name: {
            name,
            image_url,
            hasLactose,
          },
          tagline,
          description,
          abv,
          ibu,
          dryHopped,
        }))(beer)
      }) ?? []
    )
  }, [queryState.data])

  return (
    <>
      {queryState.isLoading && <CircularProgress />}
      {queryState.status === 'success' && (
        <div style={{ height: 300, width: '100%' }}>
          <Box
            sx={{
              height: 400,
              width: 1,
              '& .dryhop': {
                bgcolor: 'yellow',
              },
            }}
          >
            <DataGrid
              rows={rawBeerToDataGrid}
              columns={columns}
              sortingOrder={['desc', 'asc']}
              sortModel={sortModel}
              onSortModelChange={(model) => setSortModel(model)}
              getRowClassName={(params) => {
                console.log(params)
                return params.row.dryHopped ? 'dryhop' : ''
              }}
            />
          </Box>
        </div>
      )}
    </>
  )
}

export default App
