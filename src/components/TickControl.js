import React, {Component} from 'react';
import Tick from "./Tick";
class TickControl extends Component {
    state = {
        isOver: false
    }
    handleOver = ()=>{
        this.setState({
            isOver: true
        });
    }
    render() {
        return (
            <div>
                <Tick number={10} onOver={this.handleOver}/>
                <h1>{this.state.isOver? '倒计时已完成!': '正在倒计时···'}</h1>
            </div>
        );
    }
}

export default TickControl;
