import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';
class SwitchDots extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        curIndex: PropTypes.number,
        total: PropTypes.number,
    }
    render() {
        const spans = [];
        for (let i = 0;i < this.props.total;i ++){
            spans.push(<span key={i} onClick={()=>{
                this.props.onChange && this.props.onChange(i);
            }} className={i === this.props.curIndex ? 'active' : ''}></span>);
        }
        return (
            <div className="dots">
                {spans}
            </div>
        );
    }
}

export default SwitchDots;
