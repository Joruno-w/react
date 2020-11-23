import React, {Component} from 'react';
import './index.css';
class StudentSearchBar extends Component {
    constructor(props) {
        super(props);
        const def = {
            key: '',
            sex: -1,
        };
        this.state = Object.assign({},def,this.props.defaultValue);
    }

    handleRadioChange = e=>{
        this.setState({
            sex: +e.target.value
        });
    };

    handleSearch = ()=>{
      this.props.onSearch && this.props.onSearch(this.state);
    };

    render() {
        return (
            <div>
                关键字: <input type="text" placeholder="请输入关键字" onChange={e=>this.setState({key: e.target.value})}/>
                <label>
                    <input type="radio" checked={this.state.sex === -1} value={-1} onChange={this.handleRadioChange}/>不限
                </label>
                <label>
                    <input type="radio" checked={this.state.sex === 0} value={0} onChange={this.handleRadioChange}/>男
                </label>
                <label>
                    <input type="radio" checked={this.state.sex === 1} value={1} onChange={this.handleRadioChange}/>女
                </label>
                <button onClick={this.handleSearch}>搜索</button>
            </div>
        );
    }
}

export default StudentSearchBar;