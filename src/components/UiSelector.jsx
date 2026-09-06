import React, {useContext} from 'react';

import {UiStyleContext} from '../contexts/UiStyleContextProvider';
import UIs from '../lib/UIs';
import useTheme from '../lib/useTheme';

export default () => {
    const uiContext = useContext(UiStyleContext);
    const {isHacker} = useTheme();
    const nextUi = isHacker ? UIs.PROFESSIONAL : UIs.HACKER;

    return (
        <button
            className={isHacker ? 'monospace' : 'raleway'}
            onClick={() => uiContext.setUi(nextUi.name)}
            style={{
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 600,
                padding: '8px 16px',
                borderRadius: 999,
                border: isHacker ? 'solid 1px #00FF41' : 'solid 1px #E5E7EB',
                backgroundColor: isHacker ? 'rgba(0, 255, 65, 0.08)' : '#FFFFFF',
                color: isHacker ? '#00FF41' : '#1E293B',
                boxShadow: isHacker ? '0 0 12px rgba(0, 255, 65, 0.25)' : '0 2px 8px rgba(15, 23, 42, 0.08)',
                transition: 'transform 150ms ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            {isHacker ? '> exit_hacker_mode' : `Switch to ${nextUi.name} mode`}
        </button>
    );
};
