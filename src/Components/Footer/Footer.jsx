import Logo from '/Logo.svg'

function Footer() {
    return (
        <div className='h-[599px] w-[375px] lg:h-[266px]  md:h-[428px] sm:w-full justify-between lg:px-[60px]   pt-[40px] px-[80px] pb-[20px] bg-primary'>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 ml-[-30px]'>

                <div className='md:col-span-2 h-[121px] md:w-[413px] md:h-[102px] gap-[20px]'>

                    <img className='fill-white w-[238.89px] h-[25px]  ' src={Logo} alt="Logo" />

                    <p className='w-[335px] h-[76px]  md:w-[413px] md:h-[57px] whitespace-normal md:ml-8 mt-5 mb-10 font-normal text-[16px] leading-[19.36px] text-white'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>

                </div>
                {/* Footer Links */}
                <div className='mt-8 lg:mt-2  lg:w-[197px] lg:h-[141px] md:m-8'>
                    <h4 className='font-semibold text-[21px] leading-[25.41px] mb-3 text-white'>Our Technologies</h4>
                    <ul>
                        <li className='flex flex-col font-medium text-[14px] text-white leading-[16.94px] gap-3'>
                            <a href="#">ReactJS</a>
                            <a href="#">Gatsby</a>
                            <a href="#">NextJS</a>
                            <a href="#">NodeJS</a>
                        </li>
                    </ul>
                </div>

                <div className='mt-8  lg:mt-2 lg:w-[197px] lg:h-[141px]  md:m-8'>
                    <h4 className='font-semibold text-white text-[21px] leading-[25.41px] mb-3'>Our Services</h4>
                    <ul>
                        <li className='flex flex-col font-medium text-[14px] text-white leading-[16.94px] gap-3'>
                            <a href="#">Social media Marketing</a>
                            <a href="#">Web & Mobile App Development</a>
                            <a href="#">Data & Analytics</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='grid grid-rows-2 justify-center md:mt-[-25px] lg:mt-[-20px]'>
                <span className='flex justify-center border-b border-solid w-[335px] md:w-[630px] border-white'></span>

                {/* <div className='flex justify-center'>
                    <p className='w-[257px] gap-[16px] h-[17px] ml-8 mt-5 font-medium text-[14px] leading-[16.94px] text-white'>Privacy Policy   |  Terms & Conditions</p>
                </div> */}

                {/* If we want, can be done in this way or as commented above */}
                <div className='flex flex-col-3 justify-center'>
                    <p className='w-[131px] h-[17px] ml-8 mt-2 font-medium text-[14px] leading-[16.94px] text-white'>Privacy Policy</p>
                    <span className='flex justify-center border-b mt-2 border-solid w-[16px] rotate-90 border-white'></span>
                    <p className='w-[131px] h-[17px] ml-8 mt-2 font-medium text-[14px] leading-[16.94px] text-white'>Terms & Conditions</p>

               
               </div>
            </div>

        </div>
    )
}

export default Footer