import React from 'react';

import UiPicker from '../lib/UiPicker';
import UIs from '../lib/UIs';

import DhIntroSegment from "./darkhipster/IntroSegment";
import HhIntroSegment from "./happyhipster/IntroSegment";
import HaIntroSegment from "./hacker/IntroSegment";
import PrIntroSegment from "./professional/IntroSegment";

export default () => {
    const picker = new UiPicker({
        [UIs.DARK_HIPSTER.name]: <DhIntroSegment/>,
        [UIs.HAPPY_HIPSTER.name]: <HhIntroSegment/>,
        [UIs.HACKER.name]: <HaIntroSegment/>,
        [UIs.PROFESSIONAL.name]: <PrIntroSegment/>
    });

    return picker.get();
};