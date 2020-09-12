import React, {Component} from 'react';
import '../css/ball.css';
class Ball extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xSpeed: this.props.xSpeed || 50,
            ySpeed: this.props.ySpeed || 50,
            left: this.props.left || 0,
            top: this.props.top || 0,
            bg: this.props.bg || 'red'
        }
        const duration = 16;
        setInterval(()=>{
            let xDis = this.state.xSpeed * duration / 1000;
            let yDis = this.state.ySpeed * duration / 1000;
            let newLeft = this.state.left + xDis;
            let newTop = this.state.top + yDis;
            if (newLeft <= 0){
                this.setState({
                    xSpeed: -this.state.xSpeed
                });
                newLeft = 0;
            }else if (newLeft >= document.documentElement.clientWidth - 100){
                this.setState({
                    xSpeed: -this.state.xSpeed
                });
                newLeft = document.documentElement.clientWidth - 100;
            }else if (newTop <= 0){
                this.setState({
                    ySpeed: -this.state.ySpeed
                });
                newTop = 0;
            }else if(newTop >= document.documentElement.clientHeight - 100){
                this.setState({
                    ySpeed: -this.state.ySpeed
                });
                newTop = document.documentElement.clientHeight - 100;
            }
            this.setState({
                left: newLeft,
                top: newTop
            });
        },duration);
    }

    render() {
        return (
            <div className="ball" style={{
                left: this.state.left,
                top: this.state.top,
                backgroundColor: this.state.bg
            }}>
            </div>
        );
    }
}

export default Ball;
