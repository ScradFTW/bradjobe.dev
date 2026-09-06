import React, {useRef} from 'react';
import {Container, Ref, Tab, Sticky} from 'semantic-ui-react';
import Fade from './components/common/Fade';

import UiSelector from './components/UiSelector';
import IntroSegment from './components/IntroSegment';
import MePane from './components/MePane';
import ProjectsPane from './components/ProjectPane';

import UiStyleContextProvider from './contexts/UiStyleContextProvider';

import scroll from './lib/Scroll';
import useTheme from './lib/useTheme';

import 'semantic-ui-css/components/icon.css';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

const AppContent = () => {
    const contextRef = useRef(null);
    const {isHacker, fontClass, colours} = useTheme();
    const tabColour = isHacker ? 'green' : 'blue';

    return (
        <Ref innerRef={contextRef}>
            <Container
                style={{
                    minWidth: '100%',
                    backgroundColor: colours.background,
                    transition: 'background-color 200ms ease'
                }}
            >
                <IntroSegment/>
                <div
                    style={{
                        position: 'fixed',
                        top: 16,
                        right: 16,
                        zIndex: 999
                    }}
                >
                    <UiSelector/>
                </div>
                <Sticky context={contextRef}>
                    <Tab
                        className={'tabBar'}
                        onTabChange={() => scroll('tabBar')}
                        menu={{
                            secondary: true,
                            pointing: true,
                            className: isHacker ? `${fontClass} hackerMenu` : fontClass,
                            style: {
                                backgroundColor: isHacker ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                                backdropFilter: 'blur(8px)',
                                borderBottom: `solid 1px ${colours.border}`,
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
                                    color: tabColour
                                },
                                render: () => (
                                    <Fade>
                                        <Tab.Pane
                                            style={{
                                                height: '92vh',
                                                border: 'none',
                                                backgroundColor: colours.background
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
                                    color: tabColour
                                },
                                render: () => (
                                    <Fade>
                                        <Tab.Pane
                                            style={{
                                                height: '92vh',
                                                border: 'none',
                                                backgroundColor: colours.background
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

export default () => (
    <UiStyleContextProvider>
        <AppContent/>
    </UiStyleContextProvider>
);
