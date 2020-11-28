import React, {Component} from 'react';
import {connect} from 'dva';
import {Input, Button, Radio} from "antd";

class StudentSearchBar extends Component{
    constructor(props) {
        super(props);
        const def = {
            key: '',
            sex: -1,
        };
        this.state = Object.assign({}, def, this.props.defaultValue);
    }

    handleRadioChange = e => {
        this.setState({
            sex: +e.target.value
        });
    };

    handleSearch = () => {
        this.props.onSearch && this.props.onSearch(this.state);
    };

    render() {
        return (
            <div>
                关键字: <Input type="text" style={{width: 200}} placeholder="请输入关键字"
                            onChange={e => this.setState({key: e.target.value})} onPressEnter={this.handleSearch}/>
                <Radio.Group name="sex" value={this.state.sex} onChange={this.handleRadioChange}>
                    <Radio value={-1} checked={this.state.sex === -1}>不限</Radio>
                    <Radio value={0} checked={this.state.sex === 0}>女</Radio>
                    <Radio value={1} checked={this.state.sex === 1}>男</Radio>
                </Radio.Group>
                <Button onClick={this.handleSearch} type="primary">搜索</Button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    defaultValue: {
        key: "",
        sex: -1
    }
});

const mapDispatchToProps = dispatch => ({
    onSearch(condition) {
        condition.page = 1;
        dispatch({type: 'students/setCondition', payload: condition});
        dispatch({type: 'students/fetchStudents'});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentSearchBar);