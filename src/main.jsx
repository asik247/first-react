import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './Components/home.jsx'
import App from './App.jsx'
import Nav from './Components/Nav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  {/* <Home></Home> */}
  {/* <App></App> */}
  <Nav></Nav>
  </StrictMode>,
)
