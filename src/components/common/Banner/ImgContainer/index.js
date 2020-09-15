import React, {Component} from 'react';
import PropTypes from "prop-types";

class ImgContainer extends Component {
    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        imgSrcs: PropTypes.arrayOf(PropTypes.string),
        duration: PropTypes.number,
    }
    divRef = el => {
        this.div = el;
    }
    tick = 16;
    timer = null;
    switchTo = index => {
        if (index < 0){
            index = 0;
        }else if (index > this.props.imgSrcs.length - 1){
            index = this.props.imgSrcs.length - 1;
        }
        const target = - index * this.props.imgWidth;
        let current = parseFloat(getComputedStyle(this.div).marginLeft);
        const totalDis = target - current;
        const times = Math.ceil(this.props.duration / this.tick);
        const dis = totalDis / times;
        let curTime = 0;
        clearInterval(this.timer);
        this.timer = setInterval(()=>{
            curTime++;
            current += dis;
            this.div.style.marginLeft = current + 'px';
            if (curTime === times){
                this.div.style.marginLeft = target + 'px';
                clearInterval(this.timer);
            }
        },this.tick);
    }

    render() {
        const imgs = this.props.imgSrcs.map((src, i) => <img src={src} key={i} alt="" style={{
            width: this.props.imgWidth,
            height: this.props.imgHeight,
            float: 'left'
        }}/>);
        return (
            <div
                ref={this.divRef}
                className="img-container"
                style={{
                    width: this.props.imgWidth * this.props.imgSrcs.length,
                    height: this.props.imgHeight,
                }}>
                {imgs}
            </div>
        );
    }
}

export default ImgContainer;
