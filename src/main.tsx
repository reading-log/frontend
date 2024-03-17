import { Global } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App.tsx'
import { globalStyles } from './styles/globalStyles.ts'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 기본 쿼리 옵션 설정
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
