import {useContext} from 'react';
import {UiStyleContext} from "../contexts/UiStyleContextProvider";

export default class UiPicker {
    constructor(uiComponents) {
        this.uiComponents = uiComponents;
    }

    get() {
        const currentUi = useContext(UiStyleContext).ui;

        return this.uiComponents[currentUi];
    }
}