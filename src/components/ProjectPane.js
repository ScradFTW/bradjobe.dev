import React from 'react';
import {Grid} from 'semantic-ui-react';

import ProjectCard from "./ProjectCard";

export default () => (
    <Grid
        style={{
            paddingBottom: 100
        }}
    >
        <Grid.Row>
            <Grid.Column width={6}>
                <ProjectCard
                    image={'bradjobe.png'}
                    title={'My personal website'}
                    description={"You're using it right now!"}
                    githubLink={'https://github.com/ScradFTW/bradjobe.dev'}
                />
            </Grid.Column>
            <Grid.Column width={10}>
                <p
                    style={{
                        padding: '2%'
                    }}
                >
                    This is my personal site that I used for advertising contract work.
                    <br/>
                    <br/>
                    The site is written in React, and uses the Semantic UI for creating most of the UI components.
                    <br/>
                    It's mostly used for testing and experiments, but sometimes look professional.
                </p>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={6}>
                <ProjectCard
                    image={'saf.png'}
                    title={'Swimulated Artifishial Fintelligence'}
                    description={'A fish that swims in your terminal!'}
                    githubLink={'https://github.com/ScradFTW/Swimulated-Artifishial-Fintelligence'}
                />
            </Grid.Column>
            <Grid.Column width={10}>
                <p
                    style={{
                        padding: '2%'
                    }}
                >
                    Written for my AI class while I was in University, Swimulated Artificical Fintelligence is not
                    only a great pun, but also a fun C project that runs in terminal
                    <br/>
                    <br/>
                    SAF is a fish that swims in your terminal, which you can feed by pressing the 'F' key.
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
                </p>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={6}>
                <ProjectCard
                    image={'allatlantic.png'}
                    title={'allAtlanticCanada React-Native App'}
                    description={'App used for getting the latest news from allNovaScotia and its sister companies'}
                    exampleLink={'https://allatlanticcanada.com'}
                />
            </Grid.Column>
            <Grid.Column width={10}>
                <p
                    style={{
                        padding: '2%'
                    }}
                >
                    Created with React-Native, the allAtlanticCanada app allows customers of allNovaScotia and its sister
                    companies to see the news from their phone. As well as a new advanced search to allow users to quickly
                    search for articles containing complex or specific information.
                </p>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);