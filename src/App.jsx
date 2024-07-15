import { useState } from 'react'
import './App.css'
import Logo from './components/Header/Logo'
import Navbar from './components/Header/Navbar'
import Home from './components/Home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Signin />
    </>
  )
}

export default App
