import React, {useEffect, useRef, useState} from 'react';
import {Segment} from 'semantic-ui-react';

const MATRIX_GREEN = '#00FF41';
const MATRIX_URL = 'https://raw.githubusercontent.com/torvalds/linux/master/security/integrity/evm/evm_crypto.c';
const COMMAND = './brad_jobe_personal_site.sh';
const FONT_SIZE = 18;

const useTypedText = (text, speed = 55) => {
    const [typed, setTyped] = useState('');

    useEffect(() => {
        setTyped('');
        let i = 0;
        const interval = setInterval(() => {
            i += 1;
            setTyped(text.slice(0, i));
            if (i >= text.length) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return typed;
};

export default () => {
    const wrapperRef = useRef(null);
    const canvasRef = useRef(null);
    const typed = useTypedText(COMMAND);

    useEffect(() => {
        let cancelled = false;
        let frame;
        let drops = [];
        let chars = ['0', '1'];

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;

        const setup = () => {
            const {width, height} = wrapperRef.current.getBoundingClientRect();
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            context.setTransform(dpr, 0, 0, dpr, 0, 0);
            context.fillStyle = '#000000';
            context.fillRect(0, 0, width, height);

            const columns = Math.ceil(width / FONT_SIZE);
            drops = new Array(columns).fill(0).map(() => Math.random() * -height / FONT_SIZE);
        };

        setup();
        window.addEventListener('resize', setup);

        fetch(MATRIX_URL)
            .then((response) => response.text())
            .then((text) => {
                const cleaned = text.replace(/\s+/g, '');
                if (cleaned.length > 0) {
                    chars = cleaned.split('');
                }
            })
            .catch(() => {});

        const draw = () => {
            if (cancelled) return;

            const {width, height} = wrapperRef.current.getBoundingClientRect();

            context.fillStyle = 'rgba(0, 0, 0, 0.08)';
            context.fillRect(0, 0, width, height);
            context.font = `${FONT_SIZE}px 'JetBrains Mono', monospace`;
            context.textBaseline = 'top';

            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];
                const x = i * FONT_SIZE;
                const y = drops[i] * FONT_SIZE;

                context.fillStyle = '#E9FFEF';
                context.fillText(char, x, y);
                context.fillStyle = MATRIX_GREEN;
                context.fillText(chars[Math.floor(Math.random() * chars.length)], x, y + FONT_SIZE);

                if (y > height && Math.random() > 0.975) {
                    drops[i] = 0;
                } else {
                    drops[i] += 1;
                }
            }

            frame = setTimeout(() => requestAnimationFrame(draw), 45);
        };

        draw();

        return () => {
            cancelled = true;
            clearTimeout(frame);
            window.removeEventListener('resize', setup);
        };
    }, []);

    return (
        <div ref={wrapperRef} style={{position: 'relative', overflow: 'hidden', height: '93vh'}}>
            <Segment
                style={{
                    height: '93vh',
                    background: '#000000',
                    border: 'none',
                    margin: 0
                }}
            />
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    filter: 'drop-shadow(0 0 2px rgba(0, 255, 65, 0.5))'
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
                    zIndex: 2,
                    whiteSpace: 'nowrap'
                }}
            >
                <span style={{opacity: 0.7}}>$</span> {typed}
                <span
                    style={{
                        display: 'inline-block',
                        width: 11,
                        height: 20,
                        marginLeft: 2,
                        verticalAlign: 'text-bottom',
                        backgroundColor: MATRIX_GREEN,
                        animation: 'blinker 1000ms step-end infinite'
                    }}
                />
            </div>
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
};
