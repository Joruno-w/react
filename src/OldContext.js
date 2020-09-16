import React, {Component} from 'react';
import PropTypes from 'prop-types';
const types = {
    a: PropTypes.number,
    b: PropTypes.string,
    onChange: PropTypes.func
}
class A extends React.Component{
    static contextTypes = types;
    render() {
        return(
            <div>
                <h1>a: {this.context.a},b: {this.context.b}</h1>
                <B />
                <button onClick={()=>{
                    this.context.onChange(this.context.a +2);
                }}>a+2</button>
            </div>
        );
    }
}

class B extends React.Component{
    static contextTypes = types;
    render() {
        return(
            <div>
                a: {this.context.a},b: {this.context.b}
            </div>
        )
    }
}
class OldContext extends Component {
    static childContextTypes = types;

    state = {
        a: 123,
        b: 'abc'
    }

    getChildContext(){
        console.log('获取上下文中的数据')
        return{
            a: this.state.a,
            b: this.state.b,
            onChange: newA=>{
                this.setState({
                    a: newA
                })
            }
        }
    }
    render() {
        return (
            <div>
                <A />
                <button onClick={()=>{
                    this.setState({
                        a: this.state.a + 1
                    })
                }}>a+1</button>
            </div>
        );
    }
}

export default OldContext;
