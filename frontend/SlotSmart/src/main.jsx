import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProviderContextProvider } from './context/ProviderContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProviderContextProvider>
     <App />
    </ProviderContextProvider>
  </StrictMode>
)
