import React, {Component} from 'react';
import types from "../../../utils/commonTypes";
import PropTypes from "prop-types";
import WithDataGroup from "../hoc/WithDataGroup";
class Radio extends Component{

    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        info: types.singleData.isRequired
    }

    render() {
        return(
            <label>
                <input
                    type="radio"
                    value={this.props.info.value}
                    checked={this.props.value === this.props.info.value}
                    onChange={()=>{
                        this.props.onChange && this.props.onChange(this.props.info.value);
                    }}
                />
                {this.props.info.text}
            </label>
        )
    }
}

export default WithDataGroup(Radio);
