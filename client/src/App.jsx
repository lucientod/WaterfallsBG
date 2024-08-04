import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { AuthContext } from './contexts/AuthContext.js'

import Nav from './components/nav/Nav.jsx'
import Home from './components/home/Home.jsx'
import Catalogue from './components/catalogue/Catalogue.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import Footer from './components/footer/Footer.jsx'
import CreateWaterfall from './components/createWaterfall/CreateWaterfall.jsx'
import Details from './components/details/Details.jsx'

function App() {
  const [authState, setAuthState] = useState({})

  const changeAuthState = (state) => {
    setAuthState(state)
  }

  const contextData = {
    userId: authState.userId,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuth: !!authState.email,
    changeAuthState
  }

  return (
    <AuthContext.Provider value={contextData}>
      <main className='main-container'>

        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="catalogue/:WaterfallId/details" element={<Details />} />
          <Route path="createWaterfall" element={<CreateWaterfall />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

        </Routes>

        <Footer />
      </main>
    </AuthContext.Provider>
  )
}

export default App
