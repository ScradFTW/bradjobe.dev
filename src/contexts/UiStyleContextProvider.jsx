import React, {createContext} from 'react';

import UIs from '../lib/UIs';

export const UiStyleContext = createContext(null);

export default class extends React.Component {
    state = {
        ui: UIs.PROFESSIONAL.name // default ui
    };

    render() {
        return (
            <UiStyleContext.Provider
                value={{
                    setUi: (ui) => this.setState({ui: ui}),
                    ui: this.state.ui
                }}
            >
                {this.props.children}
            </UiStyleContext.Provider>
        );
    }
}