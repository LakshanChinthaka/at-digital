import React from 'react'
import Computer from '/Computer.png'
import SearchIcon from '/SearchIcon.png'
import LearnMoreBtn from '../Button/LearnMoreBtn'

function About() {
    return (
        <div className='grid grid-rows-2  mx-auto justify-center mt-[40px] '>

            {/* Box 1 */}
            <div className='grid md:grid-cols-2  lg:w-[896px] sm:mt-[150px] md:mt-[150px] lg:mt-10  xl:w-[1064px] xl:h-[414px] mx-auto lg:h-[349px] md:w-[688px] md:h-[275px]  xl:gap-[108px] md:gap-[20px] h-[572.82px] w-[335px]'>
                <div>
                    <img className='w-[275px] h-[275.82px] xl:w-[414px] xl:h-[414px] lg:w-[346px] lg:h-[346px] md:w-[275px] md:h-[275px]' src={Computer} alt="Computer" />
                </div>

                {/* Text Area */}
                <div className='w-[335px] h-[277px] lg:w-[530px] lg:h-[187px] grid grid-rows-3 justify-center md:mt-[50px] xl:mt-[100px] mt-[100px] gap-[20px] md:w-[393px] md:h-[239px]'>

                    <h3 className='font-h3 text-center md:text-left h-[66px] xl:w-[507px] xl:h-[33px] lg:w-[507px] lg:h-[33px]  mb-20 md:w-[393px] md:h-[66px] font-meduim text-[27px] leading-[33px] tracking-[0.4px] text-primary font-semibold gap-[12px] w-[335px]'>Web & Mobile App Development</h3>

                    <p className='xl:w-[542px] lg:w-[530px] text-center text-pretty md:text-left font-normal leading-[19.36px] md:w-[393px] md:h-[95px] h-[76px] text-base mt-[-10px] w-[335px]'>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>

                    <div className='flex justify-center md:justify-start mt-[35px] md:mt-5 lg:mt-10'>
                        <LearnMoreBtn />

                    </div>
                </div>

            </div>



            {/* Box 2 */}
            <div className='grid md:grid-cols-2 mt-10 sm:mt-[100px] lg:w-[896px]  xl:w-[1064px] xl:h-[414px] mx-auto lg:h-[349px] md:w-[688px] md:h-[275px]  xl:gap-[108px] md:gap-[20px] h-[572.82px] w-[335px]'>

                {/* Mobile icon */}
                <div className='md:hidden'>
                    <img className='w-[275px] h-[276px] xl:w-[414px] xl:h-[414px] lg:w-[346px] lg:h-[346px] md:w-[275px] md:h-[275px]' src={SearchIcon} alt="SearchIcon" />
                </div>


                {/* Text Area */}
                <div className='w-[335px] h-[277px] lg:w-[530px] xl:w-[542px] lg:h-[187px] grid grid-rows-3 justify-center md:mt-[50px] xl:mt-[100px] mt-[100px] gap-[20px] md:w-[393px] md:h-[239px]'>

                    <h3 className='font-h3 text-center md:text-left h-[66px] xl:w-[507px] xl:h-[33px] lg:w-[507px] lg:h-[33px]  mb-20 md:w-[393px] md:h-[66px] font-meduim text-[27px] leading-[33px] tracking-[0.4px] text-primary font-semibold gap-[12px] w-[335px]'>Digital Strategy Consulting</h3>

                    <p className='xl:w-[542px] lg:w-[530px] text-center text-pretty md:text-left font-normal leading-[19.36px] md:w-[393px] md:h-[95px] h-[76px] text-base mt-[-10px] w-[335px]'>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>

                    <div className='flex justify-center md:justify-start mt-[35px] lg:mt-[60px]'>
                        <LearnMoreBtn />

                    </div>
                </div>

                {/* Image */}
                <div>
                    <img className='hidden md:ml-20 mr-100px md:flex w-[275px] h-[276px] xl:w-[414px] xl:h-[414px] lg:w-[346px] lg:h-[346px] md:w-[275px] md:h-[276px]' src={SearchIcon} alt="SearchIcon" />
                </div>



            </div>



        </div>
    )
}

export default About