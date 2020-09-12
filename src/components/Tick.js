import React, {Component} from 'react';

class Tick extends Component {
    constructor(props) {
        super(props);
        this.state = {
           left: this.props.number
        }
        this.timer = setInterval(()=>{
            this.setState({
                left: this.state.left - 1
            });
            if (this.state.left === 0){
                clearInterval(this.timer);
            }
        },1000);
    }

    render() {
        return (
            <h1>倒计时：{this.state.left}</h1>
        );
    }
}

export default Tick;
