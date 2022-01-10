/* eslint-disable func-names */
import { render, RenderResult } from '@testing-library/react'
import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const createTestQueryClient = (): QueryClient =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

export function renderWithClient(ui: React.ReactElement): RenderResult {
  const testQueryClient = createTestQueryClient()
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  )
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>
      ),
  }
}

export function createWrapper(): ({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) => JSX.Element {
  const testQueryClient = createTestQueryClient()
  return function ({ children }: { children: JSX.Element | JSX.Element[] }) {
    return (
      <QueryClientProvider client={testQueryClient}>
        {children}
      </QueryClientProvider>
    )
  }
}
