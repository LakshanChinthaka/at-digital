import { IoMdAdd } from "react-icons/io";

function FaqSection() {
    return (
        // MAIN
        <div className='flex justify-center items-center  m-[20px] md:m-[42px] lg:m-[152px] xl:m-[297px] mt-20 h-[769px] xl:w-[896px]  lg:h-[392px] md:h-[506px] sm:h-[769px] mb-[100px] '>

            {/* FAQ */}
            <div className=' grid grid-rows-4 justify-center mb-[50px] h-[675px] m-auto lg:w-[896px] lg:h-[331px] md:w-[686px] md:h-[445px]'>

                <h3 className='text-center  w-[334px] h-[33px] bg-red-400 md:-[389px] text-[27px] leading-[33px] tracking-[0.4px] text-primary font-semibold mx-auto'>
                    Frequently asked questions
                </h3>

                {/* 1 */}
                <div className='m-auto lg:mt-5 mb-[50px] h-[325px] w-[334px] md:w-[686px]  lg:w-[896px] lg:h-[149px]  md:h-[207px] mt-[-30px]  p-[24px] gap-[13px] rounded-[7px] bg-[#FAF8FF]'>

                    <button type="button"
                        className="w-[286px] md:w-[584px] text-[20px] md:text-[22px]  lg:w-[848px] font-medium md:text-left  tracking-[0.4px] text-primary flex items-center">
                        <span class="mr-4">Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</span>

                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[14px] h-[28px] md:mt-[-30px] fill-primary  ml-auto shrink-0" viewBox="0 0 124 124">
                            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
                        </svg>

                    </button>

                    <p className='w-[286px] h-[180px] md:w-[638px] xl:h-[76px] lg:w-[848px] text-[#6F6C90] font-normal text-[16px] md:text-[18px] leading-[30px] xl:w-[798px] md:h-[104px] md:text-left text-base'>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer..</p>

                </div>

                {/* 1 */}
                <div className="bg-[#FAF8FF] lg:mt-[100px] lg:w-[896px] lg:h-[76px] md:w-[686px] md:h-[104px] w-[334px] p-[24px] h-[160px] rounded-[7px] md:mt-20 mt-[135px] m-auto ">

                    <button type="button"
                        className="w-full text-[22px]  font-medium   tracking-[0.4px] text-black flex items-center">
                        <span class="mr-4">Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[28px]  ml-auto shrink-0" viewBox="0 0 42 42">
                            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
                        </svg>
                    </button>
                </div>


                {/* 2 */}
                <div className="bg-[#FAF8FF] lg:mt-[100px] lg:w-[896px] lg:h-[76px] md:w-[686px] md:h-[104px] w-[334px] p-[24px] h-[160px] rounded-[7px] md:mt-20 mt-[135px] m-auto ">

                    <button type="button"
                        className="w-full text-[22px]  font-medium   tracking-[0.4px] text-black flex items-center">
                        <span class="mr-4">Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[28px]  ml-auto shrink-0" viewBox="0 0 42 42">
                            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
                        </svg>
                    </button>
                </div>

                {/* 3 */}
                {/* <div className="mt-[10px] bg-[#FAF8FF] p-[24px] h-[76px] rounded-[7px] ">

                    <button type="button"
                        className="w-full text-[22px] font-medium tracking-[0.4px] text-black flex items-center">
                        <span class="mr-4">Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[28px]  ml-auto shrink-0" viewBox="0 0 42 42">
                            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
                        </svg>
                    </button>
                </div> */}


            </div>
        </div>
    );
}

export default FaqSection;
