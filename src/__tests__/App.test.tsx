import React from 'react'
import App from '../components/App'
import { renderWithClient } from './utils/utils'

describe('App component', () => {
  it('renders header and grid', async () => {
    const appComponent = renderWithClient(<App />)
    expect(
      await appComponent.findByText(/Brewdog Beer List/)
    ).toBeInTheDocument()
    expect(
      await appComponent.container.getElementsByClassName('MuiDataGrid-main')
    ).toBeTruthy()
  })
})
