import { createContext, useContext } from "react";
import usePersistedState from "../hooks/usePersistedState.js";


export const AuthContext = createContext({
    _id: "",
    email: "",
    accessToken: "",
    isAuth: "",
    AuthLogout: ()=>null,
    changeAuthState: (authState = {}) => null
})

export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistedState('authState', {})

    const changeAuthState = (state) => {
        localStorage.setItem("accessToken", state.accessToken)
        setAuthState(state)

    }

    const AuthLogout = () => {
        setAuthState(null)
        localStorage.removeItem('accessToken')
    }

    const contextData = {
        _id: authState?._id,
        email: authState?.email,
        accessToken: authState?.accessToken,
        isAuth: !!authState?.email,
        changeAuthState,
        AuthLogout
    }

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}

//little hook 
export function useAuthContext() {
    const authData = useContext(AuthContext)
    return authData
}