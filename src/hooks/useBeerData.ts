import { useQuery, UseQueryResult } from 'react-query'
import { Beer } from '../models/Beer'
import { fetchBeerData } from '../queries/Beer'

export function useBeerData(): UseQueryResult<Beer[] | null> {
  return useQuery('beerData', fetchBeerData)
}
