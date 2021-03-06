export const fetchBeerData = async () => {
  const response = await fetch('https://api.punkapi.com/v2/beers?per_page=80')

  if (!response.ok) {
    throw Error(`Invalid return code: ${response.status}`)
  }

  return response.json()
}
