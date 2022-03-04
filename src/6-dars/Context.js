import React, { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
    const [countries, setCountries] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const URL = "https://restcountries.com/v2/all"

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const state = {
        countries,
        setCountries,
        searchValue,
        setSearchValue
    }

    return (
        <GlobalContext.Provider value={state}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider