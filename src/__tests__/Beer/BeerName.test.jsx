import React from 'react'
import { render } from '@testing-library/react'
import BeerName from '../../components/Beer/BeerName'

describe('BeerName component', () => {
  it('renders name and image', async () => {
    const beerNameComponent = render(
      <BeerName name="Hazy Jane" imageUrl="https://github.com/higgsboz.png" />
    )

    const image = beerNameComponent.container.getElementsByTagName('img')[0]

    expect(image).toHaveAttribute('src', 'https://github.com/higgsboz.png')
    expect(await beerNameComponent.findByText(/Hazy Jane/)).toBeInTheDocument()
  })
})
