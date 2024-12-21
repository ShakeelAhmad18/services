import { Children, createContext, useContext } from "react";


const ProviderContext=createContext()

export const ProviderContextProvider=({children})=>{
    const [authProvider,setAuthProvider]=useState(JSON.parse(localStorage.getItem('authProvider'))||{})

    return(
        <ProviderContext.Provider value={
            {
                authProvider,
                setAuthProvider
            }
        }>
            {children}

        </ProviderContext.Provider>
    )

}