import React, {Component} from 'react';
import Ball from "./Ball";
import {getRandom} from "../utils/getRandom";
class BallList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ballInfos: []
        }
        const timer = setInterval(()=>{
            const info = {
                left: getRandom(0,document.documentElement.clientWidth - 100),
                top: getRandom(100,document.documentElement.clientHeight - 100),
                xSpeed: getRandom(50,500),
                ySpeed: getRandom(50,500),
                bg: `rgba(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)})`
            }
            this.setState({
                ballInfos: [...this.state.ballInfos, info]
            });
            if (this.state.ballInfos.length === 5){
                clearInterval(timer);
            }
        },1000);
    }

    render() {
        const balls = this.state.ballInfos.map((item,i)=><Ball key={i} {...item}/>)
        return (
            <div>
                {balls}
            </div>
        );
    }
}

export default BallList;
