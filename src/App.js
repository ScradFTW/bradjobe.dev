import React, {createRef} from 'react';
import {Container, Tab, Sticky} from 'semantic-ui-react';

import UiSelector from './components/UiSelector';
import IntroSegment from './components/IntroSegment';
import MePane from './components/MePane';
import ProjectsPane from './components/ProjectPane';
import ArtPane from './components/ArtPane';

import UiStyleContextProvider from './contexts/UiStyleContextProvider';

import scroll from './lib/Scroll';
import Uis from './lib/UIs';

import 'semantic-ui-css/components/icon.css';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import {Fade} from "react-reveal";

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabColour: 'blue',
        };

        this.contextRef = createRef();
    }

    _changeUi(uiName) {
        let colour;

        switch (uiName) {
            case Uis.DARK_HIPSTER:
                colour = 'black';
                break;

            case Uis.HAPPY_HIPSTER:
                colour = 'green';
                break;

            default:
                colour = 'black';
        }

        this.setState({tabColour: colour});
    }

    render() {
        return (
            <UiStyleContextProvider>
                <Container
                    style={{
                        minWidth: '100%',
                    }}
                >
                    <IntroSegment/>
                    <div
                        className={'raleway'}
                        style={{
                            position: 'fixed',
                            bottom: 5,
                            left: 10,
                            color: 'black',
                            zIndex: 99
                        }}
                    >
                        <UiSelector onUiSelect={(uiName) => this._changeUi(uiName)}/>
                    </div>
                    <Sticky context={this.contextRef}>
                        <Tab
                            className='tabBar'
                            onClick={() => scroll('tabBar')}
                            onTabChange={() => scroll('tabBar')}
                            style={{
                                backgroundColor: '#F4F4F4',
                                height: '6vh',
                                paddingLeft: '10%',
                                paddingRight: '10%'
                            }}
                            menu={{
                                secondary: true,
                                pointing: true
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
                                },
                                /* TODO: Art Pane */
                                 // {
                                 //     menuItem: {
                                 //         content: 'Art',
                                 //         color: this.state.tabColour
                                 //     },
                                 //     render: () => (
                                 //         <Fade>
                                 //             <Tab.Pane
                                 //                 style={{
                                 //                     height: '92vh',
                                 //                     border: 'none'
                                 //                 }}
                                 //
                                 //             >
                                 //                 <ArtPane/>
                                 //             </Tab.Pane>
                                 //         </Fade>
                                 //     )
                                 // },
                             ]}
                        />
                    </Sticky>
                </Container>
            </UiStyleContextProvider>
        );
    }
}