import { renderHook } from '@testing-library/react-hooks'
import { mswServer } from './utils/msw-server'
import { beersExceptionHandler, noBeersHandler } from './utils/handlers'
import { createWrapper } from './utils/utils'
import { useBeerData } from '../hooks/useBeerData'

describe('query hook', () => {
  it('retrieves data when successful', async () => {
    const { result, waitFor } = renderHook(() => useBeerData(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => result.current.isSuccess)

    expect(result.current.data?.length).toBe(80)
  })

  it('retrieves an empty array when api has no data', async () => {
    mswServer.use(noBeersHandler)

    const { result, waitFor } = renderHook(() => useBeerData(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => result.current.isSuccess)

    expect(result.current.data?.length).toBe(0)
  })

  it('handles an error when api fails', async () => {
    mswServer.use(beersExceptionHandler)

    const { result, waitFor } = renderHook(() => useBeerData(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => result.current.isError)

    expect(result.current.error).toBeDefined()
  })
})
