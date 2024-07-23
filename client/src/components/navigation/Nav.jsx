import {NavLink, Link} from 'react-router-dom'
import styles from './Nav.module.css'

export default function Navigation(){
    return (
            <nav className={styles.nav}>
                <Link to="/">Home</Link>
                <Link to="#">Catalogue</Link>
                <Link to="#">Login</Link>
                <Link to="#">Register</Link>
            </nav>
    )
}