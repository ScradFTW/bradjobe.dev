import React, {useEffect, useState} from 'react';

// Small dependency-free stand-in for react-reveal's <Fade>, which is
// unmaintained and caps its peer dependency at React 16.
export default function Fade({children, duration = 1000, spy}) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(false);
        const id = requestAnimationFrame(() => setVisible(true));
        return () => cancelAnimationFrame(id);
    }, [spy]);

    return (
        <div
            style={{
                opacity: visible ? 1 : 0,
                transition: `opacity ${duration}ms ease`
            }}
        >
            {children}
        </div>
    );
}
