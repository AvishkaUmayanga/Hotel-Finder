import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import menuBar from '../images/bars-solid.svg'

export default function NavBar() {
  const activeLink = 'md:text-xl font-bold opacity-70 text-gray-500 hover:text-white hover:opacity-100 text-lg'
  const inActive =' md:text-xl font-bold text-white text-lg'

  const [isMenuOpen , setIsMenuOpen] = useState(false)
  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-[#222831]'>
      <div className=' text-white flex justify-between  2xl:px-[200px] xl:px-[120px] lg:px-[100px] md:px-[50px] px-[30px] py-7 max-md:py-2 md:py-3'>
        <div className='text-2xl font-bold max-md:text-xl'>
          <h3>Hfinder</h3>
        </div>
        <div className='flex '>
          <div className='flex items-center gap-3 xmd:hidden max' onClick={toggleMenu}>
            <img src={menuBar} alt="menu bar"  />
            <p>Menu</p>
          </div>
          <ol className={`${isMenuOpen? 'hidden' : 'flex gap-10  font-semibold opacity-100 max-xmd:hidden text-lg' }`} >
            <NavLink to='/' className={({ isActive }) => (isActive ? activeLink : inActive) }><li>Home</li></NavLink>
            <NavLink to='/about' className={({ isActive }) => (isActive ? activeLink : inActive) }><li>About</li></NavLink>
            <NavLink to='/hotels' className={({ isActive }) => (isActive ? activeLink : inActive) }><li>Hotels</li></NavLink>
            <NavLink to='/contact' className={({ isActive }) => (isActive ? activeLink : inActive) }><li>Contact</li></NavLink>
            {/* <NavLink to='#' className={({ isActive }) => (isActive ? activeLink : inActive) }><li>Login/Signup</li></NavLink> */}
          </ol>
        </div>
      </div>
      <ol className={`${isMenuOpen? 'flex flex-col gap-5 justify-center items-center mt-4  p-4' : 'hidden' }`} >
        <NavLink to='/' className={({ isActive }) => (isActive ? activeLink : inActive) }><li>Home</li></NavLink>
        <NavLink to='/about' className={({ isActive }) => (isActive ? activeLink : inActive) }><li>About</li></NavLink>
        <NavLink to='/hotels' className={({ isActive }) => (isActive ? activeLink : inActive) }><li>Hotels</li></NavLink>
        <NavLink to='/contact' className={({ isActive }) => (isActive ? activeLink : inActive) }><li>Contact</li></NavLink>
        {/* <NavLink to='#' className={({ isActive }) => (isActive ? activeLink : inActive) }><li>Login/Signup</li></NavLink> */}
      </ol>
    </div>
  )
 }
