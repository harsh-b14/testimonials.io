import { useState } from 'react'
import './App.css'
import Home from './components/Home/home'
import Signin from './components/Siginin/Signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Signin />
    </>
  )
}

export default App
