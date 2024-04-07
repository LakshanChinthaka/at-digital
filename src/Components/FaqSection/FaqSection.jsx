import { IoMdAdd } from "react-icons/io";

function FaqSection() {
    return (
        <div className='flex justify-center items-center mt-20'>

            <div className='grid grid-rows-4 justify-center mb-[50px]'>

                <h3 className='w-[389px] h-[33px] text-[27px] leading-[33px] tracking-[0.4px] text-primary font-semibold mx-auto'>
                    Frequently asked questions
                </h3>


                <div className='mt-[-30px] bg-[#FAF8FF] p-[24px] gap-[13px] rounded-[7px] '>

                    <button type="button"
                        className="w-full text-[22px]  font-medium   tracking-[0.4px] text-primary flex items-center">
                        <span class="mr-4">Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</span>

                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[14px] h-[28px] fill-primary  ml-auto shrink-0" viewBox="0 0 124 124">
                            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
                        </svg>

                    </button>

                    <p className='text-[#6F6C90] font-normal text-[18px] leading-[30px] w-[798px] h-[60px] text-base'>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer..</p>

                </div>


                <div className="bg-[#FAF8FF] p-[24px] mt-2 w-[846px] h-[76px] rounded-[7px]">

                    <button type="button"
                        className="w-full text-[22px]  font-medium   tracking-[0.4px] text-black flex items-center">
                        <span class="mr-4">Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[28px]  ml-auto shrink-0" viewBox="0 0 42 42">
                            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
                        </svg>
                    </button>
                </div>

                <div className="mt-[-15px] bg-[#FAF8FF] p-[24px] h-[76px] rounded-[7px]">

                    <button type="button"
                        className="w-full text-[22px] font-medium tracking-[0.4px] text-black flex items-center">
                        <span class="mr-4">Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[28px]  ml-auto shrink-0" viewBox="0 0 42 42">
                            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
                        </svg>
                    </button>
                </div>


            </div>
        </div>
    );
}

export default FaqSection;
