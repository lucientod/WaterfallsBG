import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext.jsx'

import Nav from './components/nav/Nav.jsx'
import Home from './components/home/Home.jsx'
import Catalogue from './components/catalogue/Catalogue.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import Footer from './components/footer/Footer.jsx'
import CreateWaterfall from './components/createWaterfall/CreateWaterfall.jsx'
import Details from './components/details/Details.jsx'
import Logout from './components/logout/Logout.jsx'

function App() {
 

  return (
    <AuthContextProvider >
      <main className='main-container'>

        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="catalogue/:WaterfallId/details" element={<Details />} />
          <Route path="createWaterfall" element={<CreateWaterfall />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="logout" element={<Logout />} />

        </Routes>

        <Footer />
      </main>
    </AuthContextProvider>
  )
}

export default App
