import React from 'react';
import {Segment} from 'semantic-ui-react';

const MATRIX_GREEN = '#00FF41';

export default class extends React.Component {
    MATRIX_URL = 'https://raw.githubusercontent.com/torvalds/linux/master/security/integrity/evm/evm_crypto.c';

    _drawCode(data, canvas, context) {
        const font_size = 18;

        context.font = `${font_size}px 'JetBrains Mono', monospace`;
        const columns = canvas.width / font_size;
        const rows = canvas.height / font_size;

        for (let c = 0; c < columns; c++) {
            for (let r = 0; r < rows; r++) {
                const rand = Math.random();
                const opacity = rand - ((r + 5) / rows);
                context.fillStyle = `rgba(0, 255, 65, ${opacity})`;
                context.fillText(data[Math.floor(rand * data.length)], c * font_size, r * font_size);
            }
        }
    }

    async componentDidMount() {
        const canvas = document.getElementById('matrix');
        const context = canvas.getContext('2d');

        const response = await fetch(this.MATRIX_URL);
        const text = await response.text();
        const tokens = text.match(/\S+/g);

        this._drawCode(tokens, canvas, context);
        this.interval = setInterval(() => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            this._drawCode(tokens, canvas, context);
        }, 300);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div style={{position: 'relative', overflow: 'hidden'}}>
                <Segment
                    style={{
                        height: '93vh',
                        background: '#000000',
                        border: 'none'
                    }}
                />
                <div
                    className={'monospace'}
                    style={{
                        position: 'absolute',
                        top: 24,
                        left: 24,
                        fontSize: 22,
                        fontWeight: 500,
                        color: MATRIX_GREEN,
                        textShadow: `0 0 8px ${MATRIX_GREEN}`,
                        zIndex: 2
                    }}
                >
                    <span style={{opacity: 0.7}}>$</span> ./brad_jobe_personal_site.sh
                    <span
                        className={'blinking'}
                        style={{
                            marginLeft: 2,
                            color: MATRIX_GREEN,
                            backgroundColor: MATRIX_GREEN
                        }}
                    >
                        |
                    </span>
                </div>
                <canvas
                    id={'matrix'}
                    width={1600}
                    height={725}
                    style={{
                        position: 'absolute',
                        top: 35,
                        filter: 'drop-shadow(0 0 2px rgba(0, 255, 65, 0.4))'
                    }}
                />
                <div
                    aria-hidden={'true'}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '93vh',
                        pointerEvents: 'none',
                        zIndex: 1,
                        background: 'repeating-linear-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.15) 1px, rgba(0, 0, 0, 0) 2px)',
                        boxShadow: 'inset 0 0 160px rgba(0, 0, 0, 0.85)'
                    }}
                />
            </div>
        );
    }
}
