import {NavLink, Link} from 'react-router-dom'

export default function Navigation(){
    return (
            <div className='nav'>
                <span to="/">Home</span>
                <span to="#">Catalogue</span>
                <span to="#">Login</span>
                <span to="#">Register</span>
            </div>
    )
}