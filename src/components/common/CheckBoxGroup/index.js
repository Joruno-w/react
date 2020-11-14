import React, {Component} from 'react';
import PropTypes from 'prop-types';
import types from "../../../utils/commonTypes";
import WithDataGroup from "../hoc/WithDataGroup";

class CheckBox extends Component {
    static propTypes = {
        info: types.singleData,
        chooseData: types.chooseData,
        onChange: PropTypes.func
    }
    handleChange = e => {
        let newArr;
        const val = e.target.value;
        if (e.target.checked) {
            newArr = [...this.props.chooseData, val];
        } else {
            newArr = this.props.chooseData.filter(it => it !== val);
        }
        this.props.onChange && this.props.onChange(newArr);
    }
    render() {
        return (
            <label>
                <input
                    type="checkbox"
                    value={this.props.info.value}
                    checked={this.props.chooseData.includes(this.props.info.value)}
                    onChange={this.handleChange}
                />
                {this.props.info.text}
            </label>
        );
    }
}
export default WithDataGroup(CheckBox);
