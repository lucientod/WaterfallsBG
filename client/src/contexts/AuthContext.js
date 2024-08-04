import { createContext } from "react";


export const AuthContext = createContext({
    userId: "",
    email: "",
    accessToken: "",
    isAuth: "",
    changeAuthState: (authState = {}) => null
})