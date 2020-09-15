import React, {Component} from 'react';
import PropTypes from 'prop-types';
import types from "../../../utils/commonTypes";
class CheckBoxGroup extends Component {
    static defaultProps = {
        data: [],
        chooseData: []
    }
    static propTypes = {
        data: types.groupData.isRequired,
        chooseData: types.chooseData,
        onChange: PropTypes.func
    }
    handleChange = e=>{
        let newArr;
        const val = e.target.value;
        if (e.target.checked){
            newArr = [...this.props.chooseData,val];
        }else{
            newArr = this.props.chooseData.filter(it=>it!==val);
        }
        this.props.onChange && this.props.onChange(newArr);
    }
    getCheckbox = ()=>{
        return this.props.data.map(it=>(<label key={it.value}>
            <input
                type="checkbox"
                value={it.value}
                checked={this.props.chooseData.includes(it.value)}
                onChange={this.handleChange}
            />
            {it.text}
        </label>));
    }
    render() {
        const bs = this.getCheckbox();
        return (
            <div>
                {bs}
            </div>
        );
    }
}

export default CheckBoxGroup;
