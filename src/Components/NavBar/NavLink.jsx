import React from 'react'

function NavLink() {
  return (
    <div>
      <ul className='flex text-white text-[14px]  pr-20 '>
        <li className='flex uppercase gap-[28px]'>
          <a href="#" className='font-medium'>service</a>
          <a href="#" className='font-medium'>contact us</a>
          <a href="#" className='font-medium'>About us</a>
          <a href="#" className='font-medium'>careers</a>
        </li>
      </ul>
    </div>
  )
}

export default NavLink
