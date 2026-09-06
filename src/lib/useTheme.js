import {useContext} from 'react';
import {UiStyleContext} from '../contexts/UiStyleContextProvider';
import UIs from './UIs';

export default function useTheme() {
    const {ui} = useContext(UiStyleContext);
    const isHacker = ui === UIs.HACKER.name;

    return {
        isHacker,
        fontClass: isHacker ? 'monospace' : 'raleway',
        colours: {
            background: isHacker ? '#000000' : '#FFFFFF',
            cardBackground: isHacker ? '#050505' : '#FFFFFF',
            chipBackground: isHacker ? 'rgba(0, 255, 65, 0.06)' : '#F8FAFC',
            text: isHacker ? '#00FF41' : '#0F172A',
            muted: isHacker ? 'rgba(0, 255, 65, 0.6)' : '#64748B',
            border: isHacker ? 'rgba(0, 255, 65, 0.3)' : '#E5E7EB',
            divider: isHacker ? 'rgba(0, 255, 65, 0.15)' : '#F1F5F9',
            accent: isHacker ? '#00FF41' : '#6366F1',
            glow: isHacker ? '0 0 8px rgba(0, 255, 65, 0.5)' : 'none'
        }
    };
}
