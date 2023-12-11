import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppUserProvider } from './context/userContext.jsx'
import { AppShoesProvider } from './context/shoesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppShoesProvider>
      <AppUserProvider>
        <App />
      </AppUserProvider>
    </AppShoesProvider>
  </React.StrictMode>
)
