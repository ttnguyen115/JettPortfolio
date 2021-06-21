import React from 'react';
import { SiMaterialUi, SiReact, SiRedux, SiTailwindcss } from 'react-icons/si';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';


const data = [
  { icon: <SiReact fontSize="5rem" color="#79d8f7" />, text: 'React.JS'},
  { icon: <SiRedux fontSize="5rem" color="#7248b6" />, text: 'Redux', },
  { icon: <SiTailwindcss fontSize="5rem" color="#07b0ce" />, text: 'TailwinCSS', },
  { icon: <SiMaterialUi fontSize="5rem" color="#00aaf7" />, text: 'Material UI', },
];

const Accomplishments = () => (
    <Section>
        <SectionTitle>Personal skills</SectionTitle>

        <Boxes>
            {
                data.map((card, index) => (
                    <Box key={index}>
                        <BoxNum>{card.icon}</BoxNum>

                        <BoxText>{card.text}</BoxText>
                    </Box>
                ))
            }
        </Boxes>

        <SectionDivider />
    </Section>
);

export default Accomplishments;
