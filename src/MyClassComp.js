import React, {Component} from 'react';

class MyClassComp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.number){
            return <h1>{this.props.number}</h1>
        }else if (this.props.obj){
            return  <h1>姓名:{this.props.obj.name},年龄:{this.props.obj.age}</h1>
        }else {
            return null;
        }
    }
}

export default MyClassComp;
