import React from 'react'
import { animateScroll as scroll } from 'react-scroll';

import { Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,} 
    from './NavbarElements';

import {FaBars} from 'react-icons/fa'

const Navbar = ({ toggle }) => {

        const toggleHome = () =>
        scroll.scrollToTop();

        const toggleBottom = () =>
        scroll.scrollToBottom();

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to= "/" onClick ={toggleHome}>
                        NY Credit Union
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to="about" 
                            smooth={true} 
                            duration= {500} 
                            spy={true} 
                            exact ='true' 
                            offset={-80}>
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="discover" 
                            smooth={true} 
                            duration= {500} 
                            spy={true} 
                            exact ='true' 
                            offset={-80}>
                                Credit
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="services" 
                            smooth={true} 
                            duration= {500} 
                            spy={true} 
                            exact ='true' 
                            offset={-80}>
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks onClick={toggleBottom}>
                                Sign Up
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">
                            Sign In
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
