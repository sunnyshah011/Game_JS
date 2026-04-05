import React from 'react'
import Header from './component/Header'
import { Routes, Route } from 'react-router-dom'
import Login from './component/Login'
import Register from './component/Register'
import Dashboard from './component/Dashboard'

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/dashboard' element={<Dashboard />} ></Route>
      </Routes>
    </div>
  )
}

export default App
