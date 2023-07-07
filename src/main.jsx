import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeNitghtAndLight } from './componets/ThemeNitghtAndLight.jsx'
import { Pokelist } from './componets/Pokelist.jsx'
import { Pokecart } from './componets/Pokecart.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <App />
    {/* <ThemeNitghtAndLight/> */}
    {/* <Pokelist/> */}
  </React.StrictMode>,
)
