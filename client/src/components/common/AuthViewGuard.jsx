import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext.jsx"
import { Navigate, Outlet } from "react-router-dom"


export default function AuthViewGuard() {
    const { isAuth } = useContext(AuthContext)

    return (
        isAuth 
        ? <Outlet />
        : <Navigate to='/login' />
    )
}