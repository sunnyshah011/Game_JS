import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex items-center flex-col'>
      <div className='text-center text-5xl text-black mt-5' >
        USER Register & Login Page
      </div>
      <div className='flex justify-center gap-10 mt-8 border p-2 px-5'>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </div>
    </div>
  )
}

export default Header
