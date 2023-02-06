import Link from 'next/link';
import React from 'react';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    
    <Div1>
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
    </Div1>
      <Div2>

        <SocialIcons href="https://linkedin.com/in/javier-chua-6b84451a2">
          <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/jaxxier/?hl=en">
          <AiFillInstagram size="3rem"/>
          </SocialIcons>
        
      </Div2>
    </Container>
);

export default Header;
