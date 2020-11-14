import React, {Component} from 'react';
import types from "../../../utils/commonTypes";
import PropTypes from "prop-types";
import WithDataGroup from "../hoc/WithDataGroup";
class Option extends Component {
    static propTypes = {
        info: types.singleData.isRequired
    }

    render() {
        return (
            <option
                value={this.props.info.value}
            >{this.props.info.text}</option>
        )
    }
}

const OptionGroup = WithDataGroup(Option);

class Select extends Component{
    static propTypes = {
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        value: PropTypes.string.isRequired,

    }
    render() {
        return(
            <select name={this.props.name} value={this.props.value}>
                <OptionGroup {...this.props}/>
            </select>
        )
    }
}

export default Select;
