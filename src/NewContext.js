import React, {Component} from 'react';
import PropTypes from 'prop-types';

const ctx = React.createContext({
    a: 123,
    b: 'abc'
});

class A extends React.Component {
    // static contextType = ctx;

    render() {
        return (
            <ctx.Consumer>
                {value => (
                    <div>
                        <h1>a: {value.a},b: {value.b}</h1>
                        <B/>
                        <button onClick={() => {
                            value.onChange(value.a + 2);
                        }}>a+2
                        </button>
                    </div>)}
            </ctx.Consumer>
        );
    }
}

class B extends React.Component {
    // static contextType = ctx;
    render() {
        return (
            <ctx.Consumer>
                {value => (<h1>a: {value.a},b: {value.b}</h1>)}
            </ctx.Consumer>
        )
    }
}

class NewContext extends Component {

    state = {
        a: 123,
        b: 'abc',
        onChange: newA => {
            this.setState({
                a: newA
            });
        }
    }

    render() {
        return (
            <ctx.Provider value={this.state}>
                <A/>
                <button onClick={() => {
                    this.setState({
                        a: this.state.a + 1
                    })
                }}>a+1
                </button>
            </ctx.Provider>
        );
    }
}

export default NewContext;
