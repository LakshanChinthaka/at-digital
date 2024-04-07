import React from 'react'
import Logo from '/Logo.svg'
import NavLink from './NavLink'

function NavBar() {
  return (
    <div className='z-10 fixed w-full h-[77px] flex justify-between items-center  px-26px py-80px bg-primary'>
      <img className='fill-white w-[238.89px] h-[25px]' src={Logo} alt="Logo" />
      <NavLink/>
    </div>
  )
}

export default NavBar