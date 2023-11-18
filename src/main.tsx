import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Carrousel from './Components/Carrousel.tsx'
import Bio from './Components/Bio.tsx'
import AboutUs from './Components/AboutUs.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Carrousel />
    <Bio />
    <AboutUs />
  </React.StrictMode>,
)
