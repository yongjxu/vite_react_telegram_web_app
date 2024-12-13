import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WebApp from '@twa-dev/sdk'
import App from './App.tsx'

WebApp.ready();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
