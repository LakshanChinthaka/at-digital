import React from 'react'
import Hero_Image from '/Hero.jpeg'
import Button from '../Button/Button'

function Hero() {
  return (
    <div className='z-0 h-screen md:h-[258px] mb-[150px] md:mb-[500px]'>
        <img className='absolute z-0 object-cover  flex top-[-40px] w-full h-[763px]' src={Hero_Image} alt="Here image" />

        <div className='xl:w-[630px] w-full lg:w-[622px] md:w-[] lg-h-[306px] absolute bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] gap-20 lg:left-[80px] top-[450px] lg:top-[354px]   md:h-[306] md:pt-[24px] pr-[40px] pb-[32px] pl-[40px] '>
            <h2 className='w-[355px] lg:w-[556px]  md:w-[688px]  mt-10 mb-[10px] md:mt-0 h-[192px] text-[36px] md:text-5xl font-bold leading-[48px] md:mb-8 text-white'>We crush your competitors, goals, and sales records - without the B.S.</h2>
            <Button/>
        </div>
    </div>
  )
}

export default Hero