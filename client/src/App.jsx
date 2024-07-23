import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './components/home/Home.jsx'
import Nav from './components/navigation/Nav.jsx'

function App() {


  return (
    <div className='main-container'>

      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
      
      </Routes>
    </div>
  )
}

export default App
