import React, {Component} from 'react';
import ImgContainer from "./ImgContainer";
import SwitchArrow from "./SwitchArrow";
import SwitchDots from "./SwitchDots";
import PropTypes from 'prop-types';
import './index.css';

class Banner extends Component {
    static defaultProps = {
        width: 520,
        height: 280,
        imgSrcs: [],
        autoDuration: 2000,
        duration: 1000
    }
    static propTypes = {
        width: PropTypes.number, //单张图片的宽度
        height: PropTypes.number, //单张图片的高度
        imgSrcs: PropTypes.arrayOf(PropTypes.string), //图片路径数组
        autoDuration: PropTypes.number, // 间隔多久再次切换
        duration: PropTypes.number, // 完成一次切换的时间
    }
    state = {
        curIndex: 0
    }
    timer = null;

    componentDidMount() {
        this.autoSwitch();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    autoSwitch = () => {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            let cur = this.state.curIndex;
            cur = (cur + 1) % this.props.imgSrcs.length;
            this.handleSwitch(cur);
        }, this.props.autoDuration);
    }
    imgRef = el => {
        this.imgContainer = el;
    }
    handleArrowChange = type => {
        let cur = this.state.curIndex;
        if (type === 'left') {
            cur--;
            if (cur < 0) {
                cur = 0;
            }
        } else {
            cur++;
            if (cur > this.props.imgSrcs.length - 1) {
                cur = this.props.imgSrcs.length - 1;
            }
        }
        this.handleSwitch(cur);
    }

    handleDotsChange = index => {
        this.handleSwitch(index);
    }

    handleSwitch = index => {
        this.setState({
            curIndex: index
        });
        this.imgContainer.switchTo(index);
    }

    render() {
        return (
            <div
                onMouseEnter={()=>{
                    clearInterval(this.timer);
                }}
                onMouseLeave={()=>{
                    this.autoSwitch();
                }}
                className="banner-container"
                style={{
                    width: this.props.width,
                    height: this.props.height
                }}>
                <ImgContainer
                    ref={this.imgRef}
                    imgWidth={this.props.width}
                    imgHeight={this.props.height}
                    imgSrcs={this.props.imgSrcs}
                    duration={this.props.duration}
                />
                <SwitchArrow onChange={this.handleArrowChange}/>
                <SwitchDots
                    onChange={this.handleDotsChange}
                    curIndex={this.state.curIndex}
                    total={this.props.imgSrcs.length}
                />
            </div>
        );
    }
}

export default Banner;
