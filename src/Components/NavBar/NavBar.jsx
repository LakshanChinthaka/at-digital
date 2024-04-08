import React, { useState } from 'react'
import Logo from '/Logo.svg'
import NavLink from './NavLink'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { ImCross } from "react-icons/im";

function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <>
      <div className='z-10 fixed w-full h-[77px] flex justify-between items-center  px-26px py-80px bg-primary'>
        <img className='fill-white w-[238.89px] h-[25px]' src={Logo} alt="Logo" />

        <div className='hidden md:flex'>
          <NavLink />
        </div>

        <GiHamburgerMenu onClick={toggle} className='fill-white w-[31px] h-[24px] cursor-pointer mr-8 md:hidden' />


        {/* <div>
        <RxCross1 className='fill-white w-[31px] h-[24px] cursor-pointer' />
       </div> */}

        {/* Mobille responsive */}
        {isOpen && (
        <div className='absolute  inline-flex justify-between w-full h-screen top-0 bottom-[-200px] py-[16px] px-[20px] bg-white animate-slide-in-right'>


          <ul className='flex  text-black text-[14px] '>
            <li className='flex flex-col uppercase gap-[36px]'>
              <a href="#" className='block font-medium'>home</a>
              <a href="#" className='block font-medium'>service</a>
              <a href="#" className='font-medium'>contact us</a>
              <a href="#" className='font-medium'>About us</a>
              <a href="#" className='font-medium'>careers</a>
            </li>
          </ul>

          <RxCross1 onClick={toggle} className='fill-black w-[31px] h-[24px] le-[268px] cursor-pointer mr-8 md:hidden' />
        </div>
        )}

        {/* Mobile responsive */}
        {/* {isOpen && (
          <div className='absolute inline-flex justify-between w-full h-screen top-0 bottom-[-200px] py-[16px] px-[20px] bg-white ease-out transition-transform duration-300 animate-move-in-right'>
            <ul className='flex text-black text-[14px]'>
              <li className='flex flex-col uppercase gap-[36px]'>
                <a href="#" className='block font-medium'>home</a>
                <a href="#" className='block font-medium'>service</a>
                <a href="#" className='font-medium'>contact us</a>
                <a href="#" className='font-medium'>About us</a>
                <a href="#" className='font-medium'>careers</a>
              </li>
            </ul>
            <RxCross1 onClick={toggle} className='fill-black w-[31px] h-[24px] le-[268px] cursor-pointer mr-8 md:hidden' />
          </div>
        )} */}

      </div>


    </>
  )
}

export default NavBar