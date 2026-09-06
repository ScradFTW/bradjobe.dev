import {useEffect, useRef, useState} from 'react';

export default function useReveal({delay = 0} = {}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return undefined;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                observer.disconnect();
            }
        }, {threshold: 0.15});

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return {
        ref,
        style: {
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(18px)',
            transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`
        }
    };
}
