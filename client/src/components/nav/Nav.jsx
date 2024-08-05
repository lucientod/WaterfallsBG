import { NavLink, Link } from 'react-router-dom'
import styles from './Nav.module.css'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext.js'

export default function Navigation() {
    const { isAuth, email } = useContext(AuthContext)
    return (
        <nav className={styles.nav}>
           
            <div className={styles.routes}>
                <Link to="/">Home</Link>
                <Link to="/catalogue">Catalogue</Link>
                {isAuth
                    ? <>
                        <Link to="/createWaterfall">Create Waterfall</Link>
                        <Link to="/logout">Logout</Link>
                    </>
                    : <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                }
            </div>
            {isAuth
                ? <span>Profile: {email}</span>
                : <span>Profile: Guest</span>
            }
        </nav>
    )
}