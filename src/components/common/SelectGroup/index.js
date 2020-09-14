import React, {Component} from 'react';

class SelectGroup extends Component {
    handleChange = e=>{
        this.props.onChange && this.props.onChange(e.target.value);
    }
    getOptions = ()=>{
        return this.props.data.map(it=>(
            <option
                key={it.value}
                value={it.value}
                onChange={this.handleChange}
            >{it.text}</option>
        ));
    }
    render() {
        const bs = this.getOptions();
        return (
            <select>
                {bs}
            </select>
        );
    }
}

export default SelectGroup;
