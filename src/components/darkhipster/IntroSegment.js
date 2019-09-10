import React from 'react';
import {Segment} from 'semantic-ui-react';
import Fade from 'react-reveal/Fade';

import HexToRgb from '../../lib/HexToRgb';

export default class extends React.Component {
    state = {
        background: '#000000'
    };

    _createBackground() {
        const numOfGrads = (Math.floor(Math.random() * 50) + 10) * 2;
        const grads = [];
        const colors = ['#000000', '#0f0f0f'];

        for (let i = 0; i < numOfGrads; i++) {
            const deg = Math.floor(Math.random() * 90);
            const numOfLines = (Math.floor(Math.random() * 100) + 25) * 2;

            const lines = [];
            for (let l = 0; l < numOfLines - 1; l++) {
                const {red, green, blue} = HexToRgb(colors[Math.floor(Math.random() * colors.length)]);
                const alpha = Math.random() + 0.2;

                lines.push(`rgba(${red}, ${green}, ${blue}, ${alpha}) ${l / numOfLines * 100}%`);
                lines.push(`rgba(${red}, ${green}, ${blue}, ${alpha}) ${l + 1 / numOfLines * 100}%`);
            }

            grads.push(`linear-gradient(${deg}deg, ${lines.join(',')})`);
        }

        return grads.join(',');
    };

    componentDidMount() {
        this.setState({background: this._createBackground()});
        this.interval = setInterval(() => {
            this.setState({background: this._createBackground()});
        }, 15000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <p
                    className={'raleway'}
                    onClick={() => window.location.reload()}
                    style={{
                        background: 'black',
                        position: 'absolute',
                        cursor: 'pointer',
                        fontSize: 130,
                        fontWeight: 300,
                        color: 'white',
                        lineHeight: '80vh',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        left: '32.25vw',
                        textShadow: '5px 5px #000000',
                        zIndex: 999
                    }}
                >
                    bradjo.be
                </p>
                <Fade
                    spy={this.state.background}
                    duration={4000}
                    reverse={true}
                >
                    <Segment
                        inverted
                        vertical
                        textAlign='center'
                        style={{
                            height: '93vh',
                            background: this.state.background
                        }}
                    >
                    </Segment>
                </Fade>
            </div>
        );
    }
}
