import React, { useEffect } from 'react'
import Login from './pages/Login.jsx'
import Singup from './pages/Singup.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { Toaster } from "react-hot-toast";
import { useAuthContext } from './context/AuthContext.jsx'


const App = () => {
  const { authUser } = useAuthContext()
  console.log(authUser)



  return (

    <div className='p-4 justify-center items-center h-screen flex flex-col gap-40'>
      <Routes>
        <Route exact path='/' element={authUser ? <Home /> : <Navigate to="/signup" />} />
        <Route exact path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route exact path='/signup' element={authUser ? <Navigate to="/" /> : <Singup />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App