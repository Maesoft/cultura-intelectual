import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Login from "./components/Login.jsx"
import User from './components/user.jsx'
import { ProductProvide } from './context/ProductsContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/you",
    element:<User/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvide>
    <RouterProvider router={router}/>
    </ProductProvide>
  </React.StrictMode>,
)
