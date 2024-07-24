import { NavLink, Link } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div className={styles.routes}>
                <Link to="#">Catalogue</Link>
                <Link to="#">Login</Link>
                <Link to="#">Register</Link>
            </div>
        </nav>
    )
}