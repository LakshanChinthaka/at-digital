import React from 'react'
import Computer from '/Computer.png'
import SearchIcon from '/SearchIcon.png'
import LearnMoreBtn from '../Button/LearnMoreBtn'

function About() {
    return (
        <div className='grid grid-rows-2 mx-auto justify-center mt-[40px] border border-solid border-red-400'>

            {/* Box 1 */}
            <div className='grid md:grid-cols-2  lg:w-[896px]  xl:w-[1064px] xl:h-[414px] border border-solid border-black mx-auto lg:h-[349px] md:w-[688px] md:h-[275px]  xl:gap-[108px] md:gap-[20px] h-[572.82px] w-[335px]'>
                <div>
                    <img className='w-[275px] h-[275.82px] xl:w-[414px] xl:h-[414px] lg:w-[346px] lg:h-[346px] md:w-[275px] md:h-[275px]' src={Computer} alt="Computer" />
                </div>

                {/* Text Area */}
                <div className='w-[335px] h-[277px] lg:w-[530px] lg:h-[187px] grid grid-rows-3 justify-center md:mt-[50px] xl:mt-[100px] mt-[100px] gap-[20px] md:w-[393px] md:h-[239px]'>

                    <h3 className='text-center md:text-left h-[66px] xl:w-[507px] xl:h-[33px] lg:w-[507px] lg:h-[33px]  mb-20 md:w-[393px] md:h-[66px] font-meduim text-[27px] leading-[33px] tracking-[0.4px] text-primary font-semibold gap-[12px] w-[335px]'>Web & Mobile App Development</h3>

                    <p className='text-center text-pretty md:text-left font-normal leading-[19.36px] md:w-[393px] md:h-[95px] h-[76px] text-base mt-[-10px] w-[335px]'>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>

                    <div className='flex justify-center md:text-left mt-[35px] md:mt-5 lg:mt-10'>
                        <LearnMoreBtn />

                    </div>
                </div>

            </div>

            {/* Box 2 */}
            <div className='grid grid-cols-2 w-[1064px] h-[414px] gap-[108px]'>

                <div className='grid grid-rows-3 justify-center mt-[100px] gap-[20px]'>

                    <h3 className='w-[507px] h-[33px] font-meduim text-[27px] leading-[33px] tracking-[0.4px] text-primary font-semibold gap-[12px]'>Digital Strategy Consulting</h3>

                    <p className='font-normal leading-[19.36px]  mt-[-45px] w-[542px] h-[95px]  text-base '>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>

                    <div className='mt-[-40px]'>
                        <LearnMoreBtn />

                    </div>

                </div>

                <div>
                    <img className='w-[414px] h-[416px]' src={SearchIcon} alt="SearchIcon" />
                </div>


            </div>


        </div>
    )
}

export default About