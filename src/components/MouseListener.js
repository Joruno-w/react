import React, {PureComponent} from 'react';
import './index.css';
class MouseListener extends PureComponent {
    state = {
        x: 0,
        y: 0
    }

    divRef = el=>{
        this.div = el;
    }

    handleMove = e=>{
        let x = e.clientX;
        let y = e.clientY;
        const {left,top} = this.div.getBoundingClientRect();
        x -= left;
        y -= top;
        this.setState({
            x,
            y
        })

    }

    render() {
        return (
            <div ref={this.divRef} className="box" onMouseMove={this.handleMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

export default MouseListener;
