import { Link } from '@/navigation'
import React from 'react'


const PackagesComponent = () => {


    return (
        <>
            <div className={`flex flex-col justify-center py-[70px] md:py-[100px] xl:py-[130px] px-[20px] md:px-[50px] xl:px-[80px] border-b`}>
                <div data-aos="fade-up" className="flex flex-col items-center w-full">
                    <h1 data-aos="fade-up" className="text-primary text-center [font-size:_clamp(2rem,2rem+1vw,3rem)] font-[500]">
                        {`Our Packages`}
                    </h1>
                </div>
                <div className={`grid grid-cols-12 pt-[30px] md:pt-[40px] xl:pt-[50px]`}>
                    <div className="col-start-1 col-end-13">
                        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-y-[50px] lg:gap-x-[20px]`}>
                            {/* PACKAGE - 1 */}
                            <div data-aos="fade-up" className="flex flex-col items-center flex-1 rounded-xl border bg-white px-[30px] py-[40px] h-full w-full max-w-[500px] m-auto">
                                <div data-aos="fade-up" className="text-primary text-4xl font-[600]">Starter</div>
                                <div data-aos="fade-up" className="text-6xl pt-10 text-primary font-[600]">
                                    199
                                    <span className='text-3xl'>DKK</span>
                                </div>
                                <button data-aos="fade-up" className="my-[20px] w-full max-w-[300px] p-2 max-sm:p-2 rounded-3xl bg-primary hover:bg-primary/[0.8] text-white text-xl max-sm:text-lg">
                                    Purchase
                                </button>
                                <div data-aos="fade-up" className='pt-[30px]'>
                                    Short description
                                </div>
                                <ul className='flex flex-col gap-y-[10px] text-[1rem]'>
                                    <li data-aos="fade-up" className='text-desc'>Upto 10 users</li>
                                    <li data-aos="fade-up" className='text-desc'>Admin Access</li>
                                </ul>
                            </div>

                            {/* PACKAGE - 2 */}
                            <div data-aos="fade-up" className="flex flex-col items-center flex-1 rounded-xl overflow-hidden border px-[30px]py-[40px] w-full max-w-[500px] m-auto">
                                <div className="text-6xl p-[50px] bg-primary text-white font-[600] border-b w-full text-center">
                                    <p data-aos="fade-up">
                                        199
                                        <span className='text-3xl'>DKK</span>
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center, w-full px-[30px] py-[40px]">
                                    <div data-aos="fade-up" className="text-primary text-4xl font-[600]">Professional</div>
                                    <div data-aos="fade-up" className='pt-[40px]'>
                                        Short description
                                    </div>
                                    <ul className='flex flex-col gap-y-[10px] text-[1rem]'>
                                        <li data-aos="fade-up" className='text-desc'>Upto 10 users</li>
                                        <li data-aos="fade-up" className='text-desc'>Admin Access</li>
                                    </ul>
                                    <button data-aos="fade-up" className="mt-[20px] w-full max-w-[300px] p-2 max-sm:p-2 rounded-3xl bg-primary hover:bg-primary/[0.8] text-white text-xl max-sm:text-lg">
                                        Purchase
                                    </button>
                                </div>
                            </div>

                            {/* PACKAGE - 3 */}
                            <div data-aos="fade-up" className="flex flex-col items-center flex-1 rounded-xl overflow-hidden border border-border w-full max-w-[500px] m-auto">
                                <div className="animate-background-shine bg-[linear-gradient(130deg,#11005E,35%,#11005ECC,60%,#11005E)] bg-[length:200%_100%] text-6xl py-[50px] xl:p-[50px] text-white font-[600] w-full text-center">
                                    <p data-aos="fade-up">
                                        1399
                                        <span className='text-3xl'>DKK</span>
                                        <span className='text-lg'>/MO</span>
                                    </p>
                                </div>
                                <div className="animate-background-shine bg-[linear-gradient(130deg,#ffffff,45%,#11005E11,55%,#ffffff)] bg-[length:200%_100%] flex flex-col items-center justify-center text-primary h-full w-full px-[30px] py-[40px]">
                                    <div data-aos="fade-up" className="text-primary text-4xl font-[600]">Team</div>
                                    <div data-aos="fade-up" className='pt-[40px] pb-[25px] font-[500]'>
                                        Short description
                                    </div>
                                    <ul className='flex flex-col gap-y-[10px] text-[1rem]'>
                                        <li data-aos="fade-up" className='text-desc'>Upto 200 users</li>
                                        <li data-aos="fade-up" className='text-desc'>Admin Access</li>
                                    </ul>
                                    <button data-aos="fade-up" className="mt-[20px] w-full max-w-[300px] p-2 max-sm:p-2 rounded-3xl bg-white hover:bg-primary text-primary hover:text-white border text-xl max-sm:text-lg">
                                        Purchase
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="flex flex-col items-center w-full pt-[30px] md:pt-[40px] lg:pt-[50px]">
                    <p className='text-primary text-[1.5rem] font-[500] text-nowrap text-center'>Not covered in the above?</p>
                    <Link href="/contact" className='flex items-center justify-center bg-primary text-white text-[1rem] font-[500] text-nowrap text-center h-[40px] rounded-[20px] px-[30px] mt-4'>Contact Sales</Link>
                </div>
            </div>

            <div className="flex flex-col justify-center py-[70px] md:py-[100px] xl:py-[130px] px-[20px] md:px-[50px] xl:px-[80px] border-b">
                <h1 className="text-primary text-center text-6xl max-sm:text-5xl font-bold">
                    Packages
                </h1>
                {/* <div className="flex  sm:space-x-4 max-sm:space-y-4 max-sm:flex-col"> */}
                <div className={`grid grid-cols-12 pt-[30px] md:pt-[40px] xl:pt-[50px]`}>
                    <div className="col-start-1 col-end-13">
                        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-y-[50px] lg:gap-x-[20px] text-desc`}>
                            <div className="flex-1 text-xl mt-14 rounded-xl border border-[#4E67E5]/25 bg-[#080C23] p-10 w-full">
                                <div className="text-[#4d66e5]">Package one</div>
                                <div className="text-6xl my-5 font-light">$600</div>
                                <div>
                                    Short description
                                </div>
                                <button
                                    className="my-5 w-full text-black py-[10px] max-sm:p-2 rounded-3xl bg-[#4E67E5] text-xl max-sm:text-lg hover:bg-[#8a9dfc] transition-all"
                                >
                                    Purchase
                                </button>
                                <ul>
                                    <li>First feature</li>
                                    <li>Second feature</li>
                                </ul>
                            </div>
                            <div className="flex-1 text-xl mt-14 rounded-xl border border-[#9966FF]/25 bg-[#120d1d] p-10 w-full">
                                <div className="text-[#9967FF]">Package 2</div>
                                <div className="text-white text-6xl my-5 font-light">1399<span className='text-3xl'>DKK</span></div>
                                <div>
                                    Short Description
                                </div>
                                <button
                                    className="my-5 w-full text-black py-[10px] max-sm:p-2 rounded-3xl bg-[#9966FF] text-xl max-sm:text-lg hover:bg-[#BB99FF] transition-all"
                                >
                                    Purchase
                                </button>
                                <ul>
                                    <li>First Feature</li>
                                    <li>Second Feature</li>
                                    <li>Thired Feature</li>
                                </ul>
                            </div>
                            <div
                                className="flex-1 text-xl mt-14 rounded-xl border border-[#F7E16F]/25 bg-[#19170d] p-10 w-full"
                            >
                                <div className="text-[#F7E16F]">Package 3</div>
                                <div className="text-6xl my-5 font-light">$1800</div>
                                <div>
                                    Short Description
                                </div>
                                <button
                                    className="my-5 w-full text-black py-[10px] max-sm:p-2 rounded-3xl bg-[#F7E16F] text-xl max-sm:text-lg hover:bg-[#fdf2bb] transition-all"
                                >
                                    Purchase
                                </button>
                                <ul>
                                    <li>First Feature</li>
                                    <li>Second Feature</li>
                                    <li>Thired Feature</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PackagesComponent