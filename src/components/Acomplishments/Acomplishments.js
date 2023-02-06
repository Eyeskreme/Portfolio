import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number:'RPA', text: 'UiPath RPA Developer Certification'},
  { number:'Hackathon', text: 'Achieved Champion in PolyFintech Hackathon 2020', },
  { number: 'CCNA', text: 'CCNA Routing and Switching Certfication', },
  
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
      
    </Boxes>
    
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
