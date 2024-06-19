import React from 'react'
import Image from 'next/image'


const Clients = () => {


    const logos = Array(20).fill(
        <div className="relative w-[51.92px] md:w-[110px] h-[38.78px] md:h-[60px]">
            <Image fill src="/clients/client-1.png" alt="Image2Work logo" sizes="(max-width: 61.92px) 40vw, (max-width: 203px) 177vw" className="" />
        </div>
    )
    const logos2 = Array(20).fill(
        <div className="relative w-[51.92px] md:w-[110px] h-[38.78px] md:h-[60px]">
            <Image fill src="/clients/client-1.png" alt="Posterlife logo" sizes="(max-width: 61.92px) 40vw, (max-width: 203px) 177vw" className="mr-1 md:mr-4 w-16 md:w-auto " />
        </div>
    )
    const logos3 = Array(20).fill(
        <div className="relative w-[51.92px] md:w-[110px] h-[38.78px] md:h-[60px]">
            <Image fill src="/clients/client-1.png" alt="Techdestination logo" sizes="(max-width: 61.92px) 40vw, (max-width: 203px) 177vw" className="mr-1 md:mr-4 w-16 md:w-auto " />
        </div>
    )
    const logos4 = Array(20).fill(
        <div className="relative w-[51.92px] md:w-[110px] h-[38.78px] md:h-[60px]">
            <Image fill src="/clients/client-1.png" alt="Pseb logo" sizes="(max-width: 61.92px) 40vw, (max-width: 203px) 177vw" className="mr-1 md:mr-4 w-16 md:w-auto" />
        </div>
    )
    const logos5 = Array(20).fill(
        <div className="relative w-[51.92px] md:w-[110px] h-[38.78px] md:h-[60px]">
            <Image fill src="/clients/client-1.png" alt="Danban logo" sizes="(max-width: 61.92px) 40vw, (max-width: 203px) 177vw" className="mr-1 md:mr-4 w-16 md:w-auto" />
        </div>
    )
    const logos6 = Array(20).fill(
        <div className="relative w-[51.92px] md:w-[110px] h-[38.78px] md:h-[60px]">
            <Image fill src="/clients/client-1.png" alt="Danban logo" sizes="(max-width: 61.92px) 40vw, (max-width: 203px) 177vw" className="mr-1 md:mr-4 w-16 md:w-auto" />
        </div>
    )
    const logos7 = Array(20).fill(
        <div className="relative w-[51.92px] md:w-[110px] h-[38.78px] md:h-[60px]">
            <Image fill src="/clients/client-1.png" alt="Danban logo" sizes="(max-width: 61.92px) 40vw, (max-width: 203px) 177vw" className="mr-1 md:mr-4 w-16 md:w-auto" />
        </div>
    )
    const logos8 = Array(20).fill(
        <div className="relative w-[51.92px] md:w-[110px] h-[38.78px] md:h-[60px]">
            <Image fill src="/clients/client-1.png" alt="Danban logo" sizes="(max-width: 61.92px) 40vw, (max-width: 203px) 177vw" className="mr-1 md:mr-4 w-16 md:w-auto" />
        </div>
    )
    const logos9 = Array(20).fill(
        <div className="relative w-[51.92px] md:w-[110px] h-[38.78px] md:h-[60px]">
            <Image fill src="/clients/client-1.png" alt="Danban logo" sizes="(max-width: 61.92px) 40vw, (max-width: 203px) 177vw" className="mr-1 md:mr-4 w-16 md:w-auto" />
        </div>
    )
    const logos10 = Array(20).fill(
        <div className="relative w-[51.92px] md:w-[110px] h-[38.78px] md:h-[60px]">
            <Image fill src="/clients/client-1.png" alt="Danban logo" sizes="(max-width: 61.92px) 40vw, (max-width: 203px) 177vw" className="mr-1 md:mr-4 w-16 md:w-auto" />
        </div>
    )

    const combinedLogos = []
    for (let i = 0; i < logos.length; i++) {
        combinedLogos.push(logos[i], logos3[i], logos2[i], logos5[i], logos4[i], logos6[i], logos7[i], logos8[i], logos9[i], logos10[i])
    }


    return (
        <div className="pt-[80px] md:pt-[120px] lg:pt-[140px] clients">
            <p data-aos="fade-up" className="text-primary text-[1.125rem] leading-[1.625rem] font-[500] text-center">
                Our Trusted Clients
            </p>

            <div className="flex overflow-hidden pt-[50px]" data-aos="fade-up">
                <div className="flex items-center space-x-6 md:space-x-[20px] animate-scrollingLogo">
                    {combinedLogos.map((logo, index) => (
                        <div key={index}>{logo}</div>
                    ))}
                </div>

                <div className="flex items-center space-x-6 md:space-x-[20px] animate-scrollingLogo ml-20">
                    {combinedLogos.map((logo, index) => (
                        <div key={index}>{logo}</div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Clients