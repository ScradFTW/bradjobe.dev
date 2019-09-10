import React, {useContext} from 'react';
import {Dropdown} from 'semantic-ui-react';

import {UiStyleContext} from "../contexts/UiStyleContextProvider";
import UIs from "../lib/UIs";

export default (props) => {
    const uiContext = useContext(UiStyleContext);

    const items = [];
    Object.keys(UIs).forEach((key) => {
        const {name, description} = UIs[key];
        const icon = name === uiContext.ui ? 'angle double right' : null;
        items.push(
            <Dropdown.Item
                key={key}
                icon={icon}
                text={name}
                description={description}
                onClick={() => {
                    uiContext.setUi(name);
                    props.onUiSelect(name);
                }}
            />
        );
    });

    return (
        <Dropdown
            text='UI Style'
            button
            icon={null}
        >
            <Dropdown.Menu
                style={{
                    width: '25vw'
                }}
            >
                {items}
            </Dropdown.Menu>
        </Dropdown>
    );
};