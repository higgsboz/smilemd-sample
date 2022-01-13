import React from 'react'
import { renderWithClient } from '../utils/utils'
import { mswServer } from '../utils/msw-server'
import { beersExceptionHandler, delayedBeersHandler } from '../utils/handlers'
import BeerGrid from '../../components/Beer/BeerGrid'

describe('BeerGrid component', () => {
  it('displays loading indicator while loading', () => {
    mswServer.use(delayedBeersHandler)
    const gridComponent = renderWithClient(<BeerGrid />)
    const loadingIndicator = gridComponent.container.getElementsByClassName(
      'MuiCircularProgress-svg'
    )
    expect(loadingIndicator).toBeTruthy()
  })

  it('displays error message when api errors', () => {
    mswServer.use(beersExceptionHandler)
    const gridComponent = renderWithClient(<BeerGrid />)
    const errorAlert = gridComponent.findByTestId('errorAlert')
    expect(errorAlert).toBeTruthy()
  })

  it('renders grid with data', () => {
    const gridComponent = renderWithClient(<BeerGrid />)
    const dataGrid = gridComponent.findByTestId('beerDataGrid')
    expect(dataGrid).toBeTruthy()
  })
})
