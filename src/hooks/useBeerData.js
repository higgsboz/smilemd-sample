import { useQuery } from 'react-query'
import { fetchBeerData } from '../queries/Beer'

export function useBeerData() {
  return useQuery('beerData', fetchBeerData)
}
