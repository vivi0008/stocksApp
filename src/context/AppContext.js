import React, {createContext, useState} from 'react'

export const AppContext = createContext()

export const AppProvider =({children}) => {
    const [appIntro, setAppIntro] = useState(false)

    return (
        <AppContext.Provider value={{
            appIntro,
            setAppIntro
        }}>
            {children}
        </AppContext.Provider>
    )
}