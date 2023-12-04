import { createContext, useState, useEffect } from "react";

export const usersContext = createContext({})

export const UserProvide = ({ children }) => {
  const [data, setData] = useState([])

  useEffect(() => {

    {
      fetch("https://api.escuelajs.co/api/v1/users") 
      .then(res => res.json())
      .then(data => { setData(data) })
      
    }

  }, [])

  return (
    <usersContext.Provider value={data}>
      {children}
    </usersContext.Provider>
  )
}