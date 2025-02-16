import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { UserGlobalContextProvider } from './aula-09-useContext/exercicio/UserGlobalContext.tsx';
import { UiContextProvider } from './aula-09-useContext/global/UiContext.tsx';
import './tailwind.css';

const client = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <UiContextProvider>
        <UserGlobalContextProvider>
          <App />
        </UserGlobalContextProvider>
      </UiContextProvider>
    </QueryClientProvider>
  </StrictMode>,
)