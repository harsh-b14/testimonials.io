import { useState } from 'react'
import './App.css'
import Logo from './components/Header/Logo'
import Navbar from './components/Header/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />
    </>
  )
}

export default App
