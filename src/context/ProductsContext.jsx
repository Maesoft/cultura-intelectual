import { createContext, useState, useEffect } from "react";

export const productsContext = createContext({})

export const ProductProvide = ({ children }) => {
  const [data, setData] = useState([])

  useEffect(() => {

    {
      fetch("http://localhost:3000/libros") //https://fakestoreapi.com/products
      .then(res => res.json())
      .then(data => { setData(data) })
      
    }

  }, [])

  return (
    <productsContext.Provider value={data}>
      {children}
    </productsContext.Provider>
  )
}