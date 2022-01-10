import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import '../styles/App.css'
import Home from './Home'

const queryClient = new QueryClient()

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  )
}

export default App
