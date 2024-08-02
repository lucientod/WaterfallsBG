import './App.css'
import { Routes, Route } from 'react-router-dom'

import Nav from './components/nav/Nav.jsx'
import Home from './components/home/Home.jsx'
import Catalogue from './components/catalogue/Catalogue.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import Footer from './components/footer/Footer.jsx'
import CreateWaterfall from './components/createWaterfall/CreateWaterfall.jsx'
function App() {


  return (
    <main className='main-container'>

      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register/>} />
        <Route path="createWaterfall" element={<CreateWaterfall/>} />
      </Routes>

      <Footer/>
    </main>
  )
}

export default App
