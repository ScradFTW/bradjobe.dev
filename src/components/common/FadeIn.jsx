import React, {Children} from 'react';
import './FadeIn.css';

// Small dependency-free stand-in for react-fade-in, which is unmaintained
// and caps its peer dependency at React 17.
export default function FadeIn({children, delay = 0, transitionDuration = 400}) {
    return Children.map(children, (child, index) => (
        <div
            className={'fadeInBlock'}
            style={{
                animationDuration: `${transitionDuration}ms`,
                animationDelay: `${index * delay}ms`
            }}
        >
            {child}
        </div>
    ));
}
