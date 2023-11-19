import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Carrousel from './Components/Carrousel.tsx'
import Bio from './Components/Bio.tsx'
import AboutUs from './Components/AboutUs.tsx'
import Products from './Components/Products.tsx'
import Reservations from './Components/Reservations.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Carrousel />
    <Bio />
    <AboutUs />
    <Products />
    <Reservations />
  </React.StrictMode>,
)
