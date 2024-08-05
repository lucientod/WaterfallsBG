import { useContext } from "react";
import { AuthContext, useAuthContext,  } from "../contexts/AuthContext.jsx";
import { login, logout, register } from "../api/auth-api.js";

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext)

    const loginHandler = async (email, password) => {
        let result
        try {
            result = await login(email, password)
        } catch (err) {
            console.log(err);
            throw new Error(err.message)
        }
        result.password = ""
        changeAuthState(result)
        return result
    }
    return loginHandler
}

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext)

    const registerHandler = async (email, password, rePassword) => {
        // console.log(`email: ${email} p: ${password}; re: ${rePassword}`);

        if (password !== rePassword)
            throw new Error("Passwords doesnt match");
        try {
            const result = await register(email, password)
            result.password = ""
            changeAuthState(result)

            return (result)
        } catch (err) {
            throw new Error(err.message)
        }
    }
    return registerHandler
}

export const useLogout = ()=>{
    const { AuthLogout } = useAuthContext()

    const logoutHandler = async () => {        
        try {
            await logout()
             AuthLogout()

        } catch (err) {
            throw new Error(err.message)
        }
    }
    return logoutHandler
}