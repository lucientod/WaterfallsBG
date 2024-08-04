import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.js";
import { login, register } from "../api/auth-api.js";

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext)

    const loginHandler = async (email, password) => {
        try {
            const result = await login(email, password)
            localStorage.setItem("auth", result.accessToken)
            changeAuthState(result)

        } catch (error) {
            console.log(error.message);
        }
    }
    return loginHandler
}

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext)
    try {
        const registerHandler = async (email, password, rePassword) => {
// console.log(`email: ${email} p: ${password}; re: ${rePassword}`);

            if (password !== rePassword)
                throw new Error("Passwords doesnt match");

            const result = await register(email, password)
            localStorage.setItem('auth', result.accessToken)
            changeAuthState(result)
            return (result)
        }
        return registerHandler
    } catch (error) {
        console.log(error.message);
    }
}