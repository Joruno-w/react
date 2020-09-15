import React, {Component} from 'react';
import types from "../../../utils/commonTypes";
import PropTypes from "prop-types";

class SelectGroup extends Component {
    static defaultProps = {
        data: [],
    }
    static propTypes = {
        children: types.children,
        data: types.groupData.isRequired,
        onChange: PropTypes.func
    }
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
