import React, {Component} from 'react';

class CheckBoxGroup extends Component {
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
