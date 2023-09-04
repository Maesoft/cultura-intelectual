import { createContext, useState, useEffect } from "react";

export const productsContext = createContext({})

export const ProductProvide = ({ children }) => {
  const [data, setData] = useState([])

  useEffect(() => {

    {
      fetch("https://fakestoreapi.com/products")
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