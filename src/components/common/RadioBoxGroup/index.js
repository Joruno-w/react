import React, {Component} from 'react';
import types from "../../../utils/commonTypes";
import PropTypes from "prop-types";

class RadioBoxGroup extends Component {
    static defaultProps = {
        data: [],
        value: ''
    }
    static propTypes = {
        children: types.children,
        data: types.groupData.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func
    }
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
