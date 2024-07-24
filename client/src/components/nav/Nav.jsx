import { NavLink, Link } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div className={styles.routes}>
                <Link to="/catalogue">Catalogue</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    )
}