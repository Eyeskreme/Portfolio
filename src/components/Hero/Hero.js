import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Header from '../Header/Header'
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Personal Portfolio<br />
          
        </SectionTitle>
        <SectionText>
        My name is Javier and I am a prospective programmer based in Singapore. I do programming and coding during my free time and have immense experience in Data Analytics. I do Web development for fun too! Feel free to contact me for more enquiries :)   
        </SectionText>
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;