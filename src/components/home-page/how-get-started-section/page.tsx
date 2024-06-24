import React from 'react'
import ItemCard from './item-card'

interface SSDataProps {
    id: number;
    image: string;
    title: string;
    description: string;
}


const SimpleSteps = () => {

    const SSData: SSDataProps[] = [
        {
            id: 1,
            image: '/images/s-step1.svg',
            title: `Step One`,
            description: `Register company`,
        },
        {
            id: 2,
            image: '/images/s-step2.svg',
            title: `Step Two`,
            description: `Add employee.`,
        },
        {
            id: 3,
            image: '/images/s-step3.svg',
            title: `Step Three`,
            description: `Start logging.`,
        },
    ]


    return (
        <div className='flex flex-col py-[70px] md:py-[100px] xl:py-[130px] px-[20px] md:px-[50px] xl:px-[80px] min-h-[calc(100vh-50px)] justify-center border-b'>
            <h1 data-aos="fade-up" className="text-primary text-center [font-size:_clamp(2rem,2rem+1vw,3rem)] font-[500]">
                {`How To Get Started`}
            </h1>

            <p data-aos="fade-up" className='text-desc text-center text-[1rem] font-[500] mb-[32px] md:mb-[40px] xl:mb-[48px]'>
                {`Three Simple Steps!`}
            </p>

            <div className={`grid grid-cols-12 mt-[30px]`}>
                <div className="col-start-1 col-end-13">
                    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-x-[20px] lg:gap-x-[32px]`}>
                        {SSData.map((item: any) => {
                            const { id, image, title, description } = item
                            return <ItemCard key={id} id={id} image={image} title={title} description={description} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimpleSteps