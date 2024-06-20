import React from 'react'

import HeroSection from './hero-section/page'
import Clients from './clients/page'
import BenefitSection from './benefits/page'


const HomePage = () => {


    return (
        <React.Fragment>
            <HeroSection />
            <Clients />
            <BenefitSection />
        </React.Fragment>
    )
}

export default HomePage