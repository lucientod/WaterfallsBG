import { NavLink, Link } from 'react-router-dom'
import styles from './Nav.module.css'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext.jsx'

export default function Navigation() {
    const { isAuth, email } = useContext(AuthContext)
    return (
        <nav className={styles.nav}>
           
            <div className={styles.routes}>
                <Link to="/">Начална страница</Link>
                <Link to="/catalogue">Каталог</Link>
                {isAuth
                    ? <>
                        <Link to="/createWaterfall">Създай водопад</Link>
                        <Link to="/logout">Изход</Link>
                    </>
                    : <>
                        <Link to="/login">Вход</Link>
                        <Link to="/register">Регистрация</Link>
                    </>
                }
            </div>
            {isAuth
                ? <span>Профил: {email}</span>
                : <span>Профил: Гост</span>
            }
        </nav>
    )
}