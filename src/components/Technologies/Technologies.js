import React from 'react';
import {DiZend} from 'react-icons/di';
import {FaRobot} from 'react-icons/Fa';
import {BsCodeSlash} from 'react-icons/Bs';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies/Skills</SectionTitle>
    <SectionText>
    Over the years, I have picked up different IT skills that piqued my interests as I explore different and trending technologies to date.
      
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <BsCodeSlash size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Scripting and Programming laguage</ListTitle>
          <ListParagraph>
             Experience with <b>Python, SQL(Microsoft), R, HTML, Javascript</b>
             
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaRobot size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Robotic Process Automation</ListTitle>
          <ListParagraph>
            Experience with <b>UiPath</b> and develop Software Robots through business logic 
            using <b>UiPath</b>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Analytics</ListTitle>
          <ListParagraph>
            <br></br>
             Tons of experience in 
            Data Visualisation and Analytics with tools
            like <b>Tableau</b> and <b>PowerBI</b><br />
            Knowlegeable in Predictive Analytics using A.I and Machine Learning<br />
            with programming language and tools like <b>R</b> and <b>RapidMiner Studio</b>


          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
