import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { ProductProvide } from './context/ProductsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvide>
      <App />
    </ProductProvide>  
  </React.StrictMode>,
)
