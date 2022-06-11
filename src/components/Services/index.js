import React from 'react'
import Icon1 from '../../images/Icon2.svg'
import Icon2 from '../../images/Icon2.svg'
import Icon3 from '../../images/Icon3.svg'
import { 
ServicesContainer,
ServicesH1,
ServicesWrapper,
ServicesCard,
ServicesIcon,
ServicesH2,
ServicesP,
 } from './ServicesElements'


const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>
                Our Services
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}>

                    </ServicesIcon>
                    <ServicesH2>
                        Personal & Business Banking
                    </ServicesH2>
                    <ServicesP>
                        We offer $0 fee checking and savings accounts.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}>

                    </ServicesIcon>
                    <ServicesH2>
                        Mortgage Loans
                    </ServicesH2>
                    <ServicesP>
                        Our mortgage rates are among the lowest in the US.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}>

                    </ServicesIcon>
                    <ServicesH2>
                        Member Benefits
                    </ServicesH2>
                    <ServicesP>
                        Members have access to special discounts.
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
