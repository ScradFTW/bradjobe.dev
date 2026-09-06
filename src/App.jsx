import React, {createRef} from 'react';
import {Container, Ref, Tab, Sticky} from 'semantic-ui-react';
import Fade from './components/common/Fade';

import UiSelector from './components/UiSelector';
import IntroSegment from './components/IntroSegment';
import MePane from './components/MePane';
import ProjectsPane from './components/ProjectPane';

import UiStyleContextProvider from './contexts/UiStyleContextProvider';

import scroll from './lib/Scroll';
import Uis from './lib/UIs';

import 'semantic-ui-css/components/icon.css';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabColour: 'blue',
        };

        this.contextRef = createRef();
    }

    _changeUi(uiName) {
        const colour = uiName === Uis.HACKER.name ? 'green' : 'blue';

        this.setState({tabColour: colour});
    }

    render() {
        return (
            <UiStyleContextProvider>
                <Ref innerRef={this.contextRef}>
                    <Container
                        style={{
                            minWidth: '100%',
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
                            <UiSelector onUiSelect={(uiName) => this._changeUi(uiName)}/>
                        </div>
                        <Sticky context={this.contextRef}>
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
                                            color: this.state.tabColour
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
                                            color: this.state.tabColour
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
            </UiStyleContextProvider>
        );
    }
}
