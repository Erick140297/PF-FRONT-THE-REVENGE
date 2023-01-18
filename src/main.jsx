import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Card } from './Components/Card/Card'
import Home from './Components/Home/Home'
import store from './Redux/Store'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </Provider>
)
