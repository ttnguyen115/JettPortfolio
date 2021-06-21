import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
    <Section id="tech">
        <SectionDivider /><br/>

        <SectionTitle>Technologies</SectionTitle>

        <SectionText>
            I have a year in learning and making side projects with React.JS and multiple UI libraries like TailwindCSS, Material UI, SASS, Styled Components,...
        </SectionText>

        <List>
            <ListItem>
                <DiReact size="3rem" />

                <ListContainer>
                    <ListTitle>Front-end</ListTitle>

                    <ListParagraph>
                        Working with <br />
                        React.JS, Nextjs, SASS, TailwindCSS...
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            
            <ListItem>
                <DiFirebase size="3rem" />

                <ListContainer>
                    <ListTitle>Back-end</ListTitle>

                    <ListParagraph>
                        Working with <br />
                        Node, MongooseDB, Firebase...
                    </ListParagraph>
                </ListContainer>
            </ListItem>

            <ListItem>
                <DiZend size="3rem" />

                <ListContainer>
                    <ListTitle>Utilities</ListTitle>

                    <ListParagraph>
                        Working with <br />
                        Git, GitHub, Heroku... 
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
