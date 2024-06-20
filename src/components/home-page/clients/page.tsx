import React from 'react'
import Image from 'next/image'


const Clients = () => {


    const logos = Array(20).fill(
        <div className="relative w-[200px] h-[100px] md:w-[240px] md:h-[120px]">
            <Image fill src="/clients/client-1.png" alt="Image2Work logo" />
        </div>
    )
    const logos2 = Array(20).fill(
        <div className="relative w-[200px] h-[100px] md:w-[240px] md:h-[120px]">
            <Image fill src="/clients/client-1.png" alt="Posterlife logo" />
        </div>
    )
    const logos3 = Array(20).fill(
        <div className="relative w-[200px] h-[100px] md:w-[240px] md:h-[120px]">
            <Image fill src="/clients/client-1.png" alt="Techdestination logo" />
        </div>
    )
    const logos4 = Array(20).fill(
        <div className="relative w-[200px] h-[100px] md:w-[240px] md:h-[120px]">
            <Image fill src="/clients/client-1.png" alt="Pseb logo" />
        </div>
    )
    const logos5 = Array(20).fill(
        <div className="relative w-[200px] h-[100px] md:w-[240px] md:h-[120px]">
            <Image fill src="/clients/client-1.png" alt="Danban logo" />
        </div>
    )
    const logos6 = Array(20).fill(
        <div className="relative w-[200px] h-[100px] md:w-[240px] md:h-[120px]">
            <Image fill src="/clients/client-1.png" alt="Danban logo" />
        </div>
    )
    const logos7 = Array(20).fill(
        <div className="relative w-[200px] h-[100px] md:w-[240px] md:h-[120px]">
            <Image fill src="/clients/client-1.png" alt="Danban logo" />
        </div>
    )

    const combinedLogos = []
    for (let i = 0; i < logos.length; i++) {
        combinedLogos.push(logos[i], logos3[i], logos2[i], logos5[i], logos4[i], logos6[i], logos7[i])
    }


    return (
        <div className="relative pt-[70px] md:pt-[100px] lg:pt-[130px]">
            <p data-aos="fade-up" className="text-primary [font-size:_clamp(1rem,1rem+1vw,3rem)] text-[1.125rem]leading-[1.625rem] font-[500] text-center">
                Our Trusted Clients
            </p>

            <div className="flex overflow-hidden pt-[80px]" data-aos="fade-up">
                <div className="flex items-center space-x-6 md:space-x-[20px] animate-scrollingLogo">
                    {combinedLogos.map((logo, index) => (
                        <div key={index}>{logo}</div>
                    ))}
                </div>

                <div className="flex items-center space-x-6 md:space-x-[20px] animate-scrollingLogo">
                    {combinedLogos.map((logo, index) => (
                        <div key={index}>{logo}</div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Clients