import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './components/home/Home.jsx'
import Nav from './components/nav/Nav.jsx'
import Catalogue from './components/catalogue/Catalogue.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'

function App() {


  return (
    <div className='main-container'>

      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App
