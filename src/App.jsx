import { useState } from 'react'
import './App.css'
import Logo from './components/Header/Logo'
import Navbar from './components/Header/Navbar'

import Home from './components/Home/home'
import ResetPassword from './components/ResetPassword/ResetPassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <ResetPassword />
    </>
  )
}

export default App
