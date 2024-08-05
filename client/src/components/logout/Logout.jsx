import { Navigate } from "react-router-dom";
import { useLogout } from "../../hooks/useAuth.js";
import { useEffect } from "react";


export default function Logout() {

    const logout = useLogout()

    useEffect(() => { logout() }, [])

    return <Navigate to="/" />
}