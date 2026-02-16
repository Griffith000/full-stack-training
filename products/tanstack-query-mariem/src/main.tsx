import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
//configuration global 

const queryClient = new QueryClient({

  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,    // durée pendant laquelle les données sont considérées comme "fraîches" (pas besoin de re-fetcher)
     // cacheTime: 1000 * 60 * 10,   // durée pendant laquelle les données sont conservées en cache avant d'être supprimées
      retry: 2,                     // nombre de tentatives en cas d'échec
      refetchOnWindowFocus: true    // i l'utilisateur quitte l'onglet et revient, on re-fetch automatiquement les données "stale"
    }
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
   
  </StrictMode>,
)
