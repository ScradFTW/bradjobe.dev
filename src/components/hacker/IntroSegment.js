import React from 'react';
import {Segment} from 'semantic-ui-react';

export default class extends React.Component {
    MATRIX_URL = 'https://raw.githubusercontent.com/torvalds/linux/master/security/integrity/evm/evm_crypto.c';

    _drawCode(data, canvas, context) {
        const font_size = 18;

        context.font = `${font_size}px monospace`;
        const columns = canvas.width / font_size;
        const rows = canvas.height / font_size;

        for (let c = 0; c < columns; c++) {
            for (let r = 0; r < rows; r++) {
                const rand = Math.random();
                const opacity = rand - ((r + 5) / rows);
                context.fillStyle = `rgba(0, 255, 0, ${opacity})`;
                context.fillText(data[Math.floor(rand * data.length)], c * font_size, r * font_size);
            }
        }
    }

    async componentDidMount() {
        const canvas = document.getElementById("matrix");
        const context = canvas.getContext("2d");

        const response = await fetch(this.MATRIX_URL);
        const text = await response.text();
        const tokens = text.match(/\S+/g);

        this._drawCode(tokens, canvas, context);
        setInterval(() => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            this._drawCode(tokens, canvas, context);
        }, 300);
    }

    render() {
        return (
            <div>
                <Segment
                    style={{
                        height: '93vh',
                        background: 'black'
                    }}
                />
                <div
                    className={'monospace'}
                    style={{
                        position: 'absolute',
                        top: 0,
                        fontSize: 26,
                        color: '#00FF00'
                    }}
                >
                    <i>$</i> ./brad_jobe_personal_site.sh
                    <span
                        className={'blinking'}
                        style={{
                            color: 'green',
                            backgroundColor: 'green'
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
                        top: 35
                    }}
                />
            </div>
        );
    }
}