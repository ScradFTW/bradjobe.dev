import React from 'react';
import {Segment} from 'semantic-ui-react';

import Colours from './Colours';
import SnakeGame from './SnakeGame';

export default () => (
    <div>
        <p
            className={'pixel'}
            onClick={() => window.location.reload()}
            style={{
                position: 'absolute',
                cursor: 'pointer',
                fontSize: 100,
                color: 'white',
                lineHeight: '50vh',
                marginLeft: 'auto',
                marginRight: 'auto',
                left: '40vw',
                textShadow: '3px 3px ' + Colours.PINK,
                zIndex: 999
            }}
        >
            bradjo.be
        </p>
        <SnakeGame/>
        <Segment
            inverted
            vertical
            textAlign='center'
            style={{
                height: '93vh',
                background: Colours.GREEN
            }}
        >
        </Segment>
    </div>
);