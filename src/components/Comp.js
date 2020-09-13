import React, {Component} from 'react';

class Comp extends Component {
    state = {
        n: 0
    }
    handleClick = ()=>{
        this.setState(cur=>({
            n: cur.n + 1
        }));
        this.setState(cur=>({
            n: cur.n + 1
        }));
        this.setState(cur=>({
            n: cur.n + 1
        }),()=>{
            console.log(this.state.n);
        });
    }
    render() {
        console.log('render');
        return (
            <div>
                <h1>{this.state.n}</h1>
                <button onClick={this.handleClick}>+</button>
            </div>
        );
    }
}

export default Comp;
