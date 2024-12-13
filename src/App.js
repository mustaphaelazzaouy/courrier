import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Loginpage from './Pages/Loginpage'
import CreateCourrier from './Pages/CreateCourrier'
import CreateUser from './Pages/CreateUser'
import Statistiques from './Pages/Statistiques'
import Research from './Pages/Research'
import Services from './Pages/Services'
 import ProtectedRoutes from './Pages/ProtectedRoutes'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Loginpage />} path='/'></Route>
        <Route element={<ProtectedRoutes/>}>
            <Route element={<Homepage />} path='/Homepage'></Route>
            <Route element={<CreateCourrier />} path='/CreateCourrier'></Route>
            <Route element={<CreateUser />} path='/CreateUser'></Route>
            <Route element={<Statistiques />} path='/Statistiques'></Route>
            <Route element={<CreateUser />} path='/CreateUser'></Route>
            <Route element={<Research />} path='/Research'></Route>
            <Route element={<Services />} path='/Services'></Route>
        </Route>
        
    </Routes>

    </BrowserRouter>
  )
}

