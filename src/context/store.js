import React, { useMemo, useContext, useRef, useState } from "react";
import { useLocation  } from "react-router-dom";

export const Store = React.createContext()

export const useMyContext = () => useContext(Store)

export const ContextProvider = ({children}) => {
  const { search } = useLocation()


  const { page, sort } = useMemo(() => {
    const page = new URLSearchParams(search).get('page') || 1;
    const sort = new URLSearchParams(search).get('sort') || '-createdAt';
    return { 
      page: Number(page),
      sort: sort
    }
  }, [search])


  const value = { page, sort };

  Store.displayName = "DEVAT";
  return (
    <Store.Provider value={value}>
      {/* <Store.Consumer>
        { value => <h3>Consumer: {value.page}</h3> }
      </Store.Consumer> */}
      {children}
    </Store.Provider>
  )
}