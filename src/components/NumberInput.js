import React, {Component} from 'react';
class NumberInput extends Component {
    state = {
        val: ''
    }
    render() {
        return (
            <input type="text" value={this.state.val} onChange={e=>{
                const value = e.target.value;
                const val = value.replace(/\D/g,'');
                this.setState({
                    val
                });
            }}/>
        );
    }
}

export default NumberInput;
