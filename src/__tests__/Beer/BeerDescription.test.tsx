import React from 'react'
import { render } from '@testing-library/react'
import BeerDescription from '../../components/Beer/BeerDescription'

describe('BeerDescription component', () => {
  it('renders description with no warning', async () => {
    const beerDescriptionComponent = render(
      <BeerDescription
        description="World's Strongest Beer"
        hasLactose={false}
      />
    )

    expect(
      await beerDescriptionComponent.findByText(/World's Strongest Beer/)
    ).toBeInTheDocument()
    expect(
      await beerDescriptionComponent.queryByText(/Contains Lactose/)
    ).toBeNull()
  })

  it('renders description with a warning', async () => {
    const beerDescriptionComponent = render(
      <BeerDescription description="World's Strongest Beer" hasLactose />
    )

    expect(
      await beerDescriptionComponent.findByText(/World's Strongest Beer/)
    ).toBeInTheDocument()
    expect(
      await beerDescriptionComponent.findByText(/Contains Lactose/)
    ).toBeInTheDocument()
  })
})
