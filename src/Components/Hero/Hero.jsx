import React from 'react'
import Hero_Image from '/Hero.jpeg'
import Button from '../Button/Button'

function Hero() {
  return (
    <div className='z-0 h-screen '>
        <img className='absolute z-0 object-cover  flex top-[-40px] w-full h-[763px]' src={Hero_Image} alt="Here image" />

        <div className='xl:w-[630px] lg:w-[622px] lg-[306px] absolute bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] gap-20 left-[80px] top-[354px] w-[630px  h-[306] pt-[24px] pr-[40px] pb-[32px] pl-[40px] '>
            <h2 className='w-[556px] h-[192px] text-5xl font-bold leading-[48px] mb-8 text-white'>We crush your <br /> competitors, goals, and <br /> sales records - without <br /> the B.S.</h2>
            <Button/>
        </div>
    </div>
  )
}

export default Hero