import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Route } from 'react-router-dom'
import Home from './components/Home/home.jsx'
import './index.css'
import Signin from './components/Siginin/Signin.jsx'
import Signup from './components/Signup/Signup.jsx'
import ResetPassword from './components/ResetPassword/ResetPassword.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google"
import Dashboard from './components/Dashboard/Dashboard.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="signin" element={<Signin/>}>
        <Route path="" element={<Home/>}/>
      </Route>
      <Route path='resetpassword' element={<ResetPassword/>}>
      </Route>
      <Route path='dashboard' element={<Dashboard/>}></Route>

      <Route path="signup" element={<Signup/>}>
        <Route path="" element={<Home/>}/>
      </Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId='863438307177-pritp613man52ieef0m068dvob631gs4.apps.googleusercontent.com'>
      <React.StrictMode>
        <RouterProvider router={router}/>
      </React.StrictMode>
    </GoogleOAuthProvider>
  </Provider>
)


