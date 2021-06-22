import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Welcome to <br />
                Jett Portfolio
            </SectionTitle>

            <SectionText>
            I am a fresher frontend developer and have a year in learning and making side projects with React.JS and multiple UI frameworks.
            </SectionText>

            <Button>
                <a href="/Nguyễn Thành Trung CV.pdf" download="Nguyễn Thành Trung CV.pdf" style={{color: 'white'}}>
                    Download my CV
                </a>
            </Button>
        </LeftSection>
    </Section>
);

export default Hero;