import React, {useContext} from 'react';

import {UiStyleContext} from '../contexts/UiStyleContextProvider';
import UIs from '../lib/UIs';

import HackerIntroSegment from './hacker/IntroSegment';
import ProfessionalIntroSegment from './professional/IntroSegment';

export default () => {
    const {ui} = useContext(UiStyleContext);

    return ui === UIs.HACKER.name ? <HackerIntroSegment/> : <ProfessionalIntroSegment/>;
};
