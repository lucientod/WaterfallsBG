import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.js";
import { login, register } from "../api/auth-api.js";

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
        localStorage.setItem("auth", result.accessToken)
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
            localStorage.setItem('auth', result.accessToken)
            result.password = ""
            changeAuthState(result)

            return (result)
        } catch (err) {
            throw new Error(err.message)
        }

    }
    return registerHandler

}