import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Card } from './Components/Card/Card'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Card/>
  </React.StrictMode>,
)
