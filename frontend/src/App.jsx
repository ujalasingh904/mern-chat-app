import React from 'react'
import Login from './pages/Login.jsx'
import Singup from './pages/Singup.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'

const App = () => {
  return (
    <div className='p-4 justify-center items-center h-screen flex flex-col gap-40'>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<Singup/>} />
      </Routes>
    </div>
  )
}
 
export default App