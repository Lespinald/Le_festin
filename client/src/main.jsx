import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"
import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Se esta inicializando la venta principal declarando la navegacion y pasarando el provider del redux
  <React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
  </React.StrictMode>,
)
