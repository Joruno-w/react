import React, {Component} from 'react';

class RadioBoxGroup extends Component {
    handleChange = e=>{
        this.props.onChange && this.props.onChange(e.target.value);
    }
    getRadios = ()=>{
        return this.props.data.map(it=>(<label key={it.value}>
            <input
                type="radio"
                value={it.value}
                checked={this.props.value === it.value}
                onChange={this.handleChange}
            />
            {it.text}
        </label>));
    }
    render() {
        const bs = this.getRadios();
        return (
            <div>
                {bs}
            </div>
        );
    }
}

export default RadioBoxGroup;
