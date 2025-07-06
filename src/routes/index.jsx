import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import WelcomePage from '../pages/auth/welcome.jsx'
import Login from '../pages/auth/login.jsx'
import Signup from '../pages/auth/signup.jsx'
import ComingSoon from '../pages/coming-soon/coming-soon.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ComingSoon />} />
      <Route path="welcome" element={<WelcomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="early-access" element={<ComingSoon />} />
    </>
  )
)

export default router;
