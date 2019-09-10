import React from 'react';

import Colours from "./Colours";

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.xv = 0;
        this.yv = 0;
        this.px = 0;
        this.py = 0;

        this.ax = 0;
        this.ay = 0;

        this.gs = 25;
        this.tc = 25;

        this.trail = [];

        this.state = {
            focused: false,
            tail: 5
        };
    }

    _onKeyDown(event) {
        if (!this.state.focused)
            return;

        switch (event.keyCode) {
            case 37:
                this.xv = -1;
                this.yv = 0;
                break;
            case 38:
                this.xv = 0;
                this.yv = -1;
                break;
            case 39:
                this.xv = 1;
                this.yv = 0;
                break;
            case 40:
                this.xv = 0;
                this.yv = 1;
                break;
        }

        event.preventDefault();
    }

    _updateGame(context, canvas) {
        if (!this.state.focused)
            return;

        this.px += this.xv;
        this.py += this.yv;

        if (this.px < 0) {
            this.px = this.tc - 1;
        }

        if (this.px > this.tc - 1) {
            this.px = 0;
        }

        if (this.py < 0) {
            this.py = this.tc - 1;
        }

        if (this.py > this.tc - 1) {
            this.py = 0;
        }

        context.fillStyle = Colours.GREEN;
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = "white";
        for (let i = 0; i < this.trail.length; i++) {
            context.fillRect(this.trail[i].x * this.gs, this.trail[i].y * this.gs, this.gs - 2, this.gs - 2);
            if (this.trail[i].x === this.px && this.trail[i].y === this.py) {
                this.setState({tail: 5});
            }
        }

        this.trail.push({x: this.px, y: this.py});
        while (this.trail.length > this.state.tail) {
            this.trail.shift();
        }

        // snake eats the apple
        if (this.ax == this.px && this.ay == this.py) {

            this.setState({tail: this.state.tail + 1});

            this.ax = Math.floor(Math.random() * this.tc);
            this.ay = Math.floor(Math.random() * this.tc);
        }

        context.fillStyle = "red";
        context.fillRect(this.ax * this.gs, this.ay * this.gs, this.gs - 2, this.gs - 2);
    }

    componentDidMount() {
        const canvas = document.getElementById('snakegame');
        const context = canvas.getContext('2d');

        document.addEventListener('keydown', (event) => this._onKeyDown(event));

        this.interval = setInterval(() => this._updateGame(context, canvas), 1000 / 12);
    }

    render() {
        return (
            <div>
                {!this.state.focused &&
                <p
                    className={'pixel'}
                    onClick={() => window.location.reload()}
                    style={{
                        position: 'absolute',
                        cursor: 'pointer',
                        fontSize: 40,
                        color: 'white',
                        lineHeight: '20vh',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        left: '10vw',
                        textShadow: '3px 3px ' + Colours.PINK,
                        zIndex: 1000
                    }}
                >
                    paused
                    <p
                        style={{
                            position: 'absolute',
                            fontSize: 20
                        }}
                    >
                        (mouse over to play snake with your arrow keys)
                    </p>
                </p>
                }
                <p
                    className={'pixel'}
                    style={{
                        position: 'absolute',
                        fontSize: 15,
                        zIndex: 1000,
                        bottom: '25vh',
                        color: 'white',
                        textShadow: '3px 3px ' + Colours.PINK,
                        left: '1vw'
                    }}
                >
                    Points = {this.state.tail - 5}
                </p>
                <canvas
                    id={'snakegame'}
                    width={600}
                    height={600}
                    style={{
                        position: 'absolute',
                        zIndex: 999,
                        border: `solid ${this.state.focused ? 'white' : Colours.PINK}`
                    }}
                    onMouseEnter={() => this.setState({focused: true})}
                    onMouseLeave={() => this.setState({focused: false})}
                />
            </div>
        );
    }
}