import { Navigate } from "react-router-dom";
import { useLogout } from "../../hooks/useAuth.js";


export default function Logout(){

    const logout = useLogout()
    logout()

    Navigate('/')
    return <Navigate to="/"/>
}