import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Home />
      <Card />
    </div>
  )
}

export default App
