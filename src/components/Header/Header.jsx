import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Home, Navbar, SocialContainer, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
    <Container>
        <Home>
            <Link href="/">
                <a style={{display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'}}>
                    <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
                </a>
            </Link>
        </Home>

        <Navbar>
            <li>
                <Link href="#projects">
                    <NavLink>Projects</NavLink>
                </Link>
            </li>

            <li>
                <Link href="#tech">
                    <NavLink>Technologies</NavLink>
                </Link>
            </li>

            <li>
                <Link href="#about">
                    <NavLink>About</NavLink>
                </Link>
            </li>
        </Navbar>

        <SocialContainer>
            <SocialIcons href="https://github.com/ttnguyen115">
                <AiFillGithub size="3rem" />
            </SocialIcons>

            <SocialIcons href="https://www.linkedin.com/in/trung-nguyen-183327179/">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>

            <SocialIcons href="https://www.instagram.com/_nttrungg_/">
                <AiFillInstagram size="3rem" />
            </SocialIcons>
        </SocialContainer>
    </Container>
);

export default Header;
