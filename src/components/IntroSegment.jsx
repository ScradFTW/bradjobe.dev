import React from 'react';

import useTheme from '../lib/useTheme';

import HackerIntroSegment from './hacker/IntroSegment';
import ProfessionalIntroSegment from './professional/IntroSegment';

export default () => {
    const {isHacker} = useTheme();

    return isHacker ? <HackerIntroSegment/> : <ProfessionalIntroSegment/>;
};
