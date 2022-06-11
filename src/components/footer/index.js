import React from 'react'
import { 
    FooterContainer,
FooterWrap,
FooterLinksContainer,
FooterLinksWrapper,
FooterLinkItems,
FooterLinkTitle,
FooterLink
 } from './FooterElements'


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to ='/'>
                                    Careers
                                </FooterLink>
                                <FooterLink to='/'>
                                    Locations
                                </FooterLink>
                                <FooterLink to='/'>
                                    Contact Us
                                </FooterLink>
                                <FooterLink to='/'>
                                    Join Now
                                </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Support</FooterLinkTitle>
                                <FooterLink to='/'>
                                    Customer Service
                                </FooterLink>
                                <FooterLink to='/'>
                                    Feedback
                                </FooterLink>
                                <FooterLink to='/'>
                                    Accessible Banking
                                </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Mobile</FooterLinkTitle>
                                <FooterLink to='/'>
                                    Zelle
                                </FooterLink>
                                <FooterLink to='/'>
                                    Locate ATM
                                </FooterLink>
                                <FooterLink to='/'>
                                    Mobile App Help
                                </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Security</FooterLinkTitle>
                                <FooterLink to='/'>
                                    Terms & Conditions
                                </FooterLink>
                                <FooterLink to='/'>
                                    Privacy Policy
                                </FooterLink>
                                <FooterLink to='/'>
                                    Fraud Protection
                                </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
