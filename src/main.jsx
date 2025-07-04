import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import WelcomePage from './pages/auth/welcome.jsx'
import Login from './pages/auth/login.jsx'
import Signup from './pages/auth/signup.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<WelcomePage />} />
      <Route path='welcome' element={<WelcomePage />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
