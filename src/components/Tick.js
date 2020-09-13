import React, {Component} from 'react';

class Tick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n: this.props.number
        }
        this.timer = setInterval(()=>{
            this.setState({
                n: this.state.n - 1
            });
            if (this.state.n === 0){
                clearInterval(this.timer);
                this.props.onOver && this.props.onOver();
            }
        },1000);
    }

    render() {
        return (
            <h1>倒计时：{this.state.n}</h1>
        );
    }
}

export default Tick;
