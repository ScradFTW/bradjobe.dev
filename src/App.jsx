import React, {useRef} from 'react';
import {Container, Ref, Tab, Sticky} from 'semantic-ui-react';
import Fade from './components/common/Fade';

import IntroSegment from './components/IntroSegment';
import MePane from './components/MePane';
import ProjectsPane from './components/ProjectPane';

import scroll from './lib/Scroll';

import 'semantic-ui-css/components/icon.css';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

export default () => {
    const contextRef = useRef(null);

    return (
        <Ref innerRef={contextRef}>
            <Container style={{minWidth: '100%'}}>
                <IntroSegment/>
                <Sticky context={contextRef}>
                    <Tab
                        className={'tabBar'}
                        onTabChange={() => scroll('tabBar')}
                        menu={{
                            secondary: true,
                            pointing: true,
                            className: 'raleway',
                            style: {
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                backdropFilter: 'blur(8px)',
                                borderBottom: 'solid 1px #E5E7EB',
                                height: '6vh',
                                display: 'flex',
                                alignItems: 'center',
                                paddingLeft: '10%',
                                paddingRight: '10%',
                                fontWeight: 600,
                                margin: 0
                            }
                        }}
                        panes={[
                            {
                                menuItem: {
                                    content: 'Me',
                                    color: 'blue'
                                },
                                render: () => (
                                    <Fade>
                                        <Tab.Pane
                                            style={{
                                                height: '92vh',
                                                border: 'none'
                                            }}
                                        >
                                            <MePane/>
                                        </Tab.Pane>
                                    </Fade>
                                )
                            },
                            {
                                menuItem: {
                                    content: 'Projects',
                                    color: 'blue'
                                },
                                render: () => (
                                    <Fade>
                                        <Tab.Pane
                                            style={{
                                                height: '92vh',
                                                border: 'none'
                                            }}
                                        >
                                            <ProjectsPane/>
                                        </Tab.Pane>
                                    </Fade>
                                )
                            }
                        ]}
                    />
                </Sticky>
            </Container>
        </Ref>
    );
};
