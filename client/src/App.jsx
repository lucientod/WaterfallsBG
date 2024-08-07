import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext.jsx'

import Nav from './components/nav/Nav.jsx'
import Footer from './components/footer/Footer.jsx'
import Home from './components/home/Home.jsx'
import Catalogue from './components/catalogue/Catalogue.jsx'
import CreateWaterfall from './components/createWaterfall/CreateWaterfall.jsx'
import Details from './components/details/Details.jsx'
import Edit from './components/edit/EditWaterfall.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import Logout from './components/logout/Logout.jsx'
import AuthViewGuard from './components/common/AuthViewGuard.jsx'
import Example from './components/modal/Example.jsx'


function App() {

    return (
        <AuthContextProvider >
            <main className='main-container'>

                <Nav />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="catalogue" element={<Catalogue />} />
                    <Route path="catalogue/:waterfallId/details" element={<Details />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route element={<AuthViewGuard />}>
                        <Route path="createWaterfall" element={<CreateWaterfall />} />
                        <Route path="catalogue/:waterfallId/edit" element={<Edit />} />
                        <Route path="logout" element={<Logout />} />
                    </Route>
                    <Route path='*' element={<Navigate to="/" />} />
                    {/* <Route path='modal' element={<Example/>}/> */}
                </Routes>

                <Footer />
            </main>
        </AuthContextProvider>
    )
}

export default App
