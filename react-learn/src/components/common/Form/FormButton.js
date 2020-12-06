import React, {Component} from 'react';
import {Consumer} from "./context";

class FormButton extends Component {
    render() {
        return (
            <Consumer>
                {value => <button onClick={value.submit}>{this.props.children}</button>}
            </Consumer>
        );
    }
}

export default FormButton;
