import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import LenisProvider from './components/LenisProvider.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LenisProvider>
      <ScrollToTop />
        <App />
      </LenisProvider>
    </BrowserRouter>
  </StrictMode>
)
