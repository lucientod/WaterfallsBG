import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './components/home/Home.jsx'
import Navigation from './components/navigation/Navigation.jsx'

function App() {


  return (
    <div>

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
      
      </Routes>
    </div>
  )
}

export default App
