import React from 'react';
import {Grid, Ref} from 'semantic-ui-react';

import ProjectCard from './ProjectCard';
import useReveal from '../lib/useReveal';

const Description = ({children}) => (
    <p style={{padding: '2%', fontSize: 15, color: '#334155', lineHeight: 1.7}}>
        {children}
    </p>
);

const ProjectRow = ({children}) => {
    const {ref, style} = useReveal();

    return (
        <Ref innerRef={ref}>
            <Grid.Row style={style}>
                {children}
            </Grid.Row>
        </Ref>
    );
};

export default () => (
    <Grid
        stackable
        style={{
            paddingTop: 40,
            paddingBottom: 100,
            paddingLeft: '4%',
            paddingRight: '4%'
        }}
    >
        <ProjectRow>
            <Grid.Column width={6}>
                <ProjectCard
                    image={'bradjobe.png'}
                    title={'My personal website'}
                    description={'You\'re using it right now!'}
                    githubLink={'https://github.com/ScradFTW/bradjobe.dev'}
                />
            </Grid.Column>
            <Grid.Column width={10}>
                <Description>
                    This is my personal site that I used for advertising contract work.
                    <br/>
                    <br/>
                    The site is written in React, and uses the Semantic UI for creating most of the UI components.
                    <br/>
                    It&apos;s mostly used for testing and experiments, but sometimes look professional.
                </Description>
            </Grid.Column>
        </ProjectRow>
        <ProjectRow>
            <Grid.Column width={6}>
                <ProjectCard
                    image={'saf.png'}
                    title={'Swimulated Artifishial Fintelligence'}
                    description={'A fish that swims in your terminal!'}
                    githubLink={'https://github.com/ScradFTW/Swimulated-Artifishial-Fintelligence'}
                />
            </Grid.Column>
            <Grid.Column width={10}>
                <Description>
                    Written for my AI class while I was in University, Swimulated Artificical Fintelligence is not
                    only a great pun, but also a fun C project that runs in terminal
                    <br/>
                    <br/>
                    SAF is a fish that swims in your terminal, which you can feed by pressing the &apos;F&apos; key.
                    <br/>
                    The fish will continuously swim around randomly until food drops, then it will find the optimal
                    path for the food and eat it.
                    <br/>
                    <br/>
                    This was my first project I wrote in C, and allowed me to learn many of the common functions in the
                    C
                    stdlib (malloc, usleep, ...) and the ncurses library.
                    <br/>
                    <br/>
                    Clone the repo and run the makefile in your Linux terminal to run the project.
                </Description>
            </Grid.Column>
        </ProjectRow>
        <ProjectRow>
            <Grid.Column width={6}>
                <ProjectCard
                    image={'allatlantic.png'}
                    title={'allAtlanticCanada React-Native App'}
                    description={'App used for getting the latest news from allNovaScotia and its sister companies'}
                    exampleLink={'https://allatlanticcanada.com'}
                />
            </Grid.Column>
            <Grid.Column width={10}>
                <Description>
                    Created with React-Native, the allAtlanticCanada app allows customers of allNovaScotia and its sister
                    companies to see the news from their phone. As well as a new advanced search to allow users to quickly
                    search for articles containing complex or specific information.
                </Description>
            </Grid.Column>
        </ProjectRow>
    </Grid>
);
