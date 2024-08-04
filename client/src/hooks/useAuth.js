import { login } from "../api/auth-api.js";

export const useLogin = () => {
    const loginHandler = async (email, password) => {
        try {
            const result = await login(email, password)
            console.log(result);
            return result
            
        } catch (error) {
            console.log(error.message);
        }
    }
    return loginHandler
}