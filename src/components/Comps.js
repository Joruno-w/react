import React, {Component} from 'react';
export class A extends Component{
    render() {
        return(
          <h1>
              A: {this.props.a}
          </h1>
        );
    }
}

export class B extends Component{
    render() {
        return(
            <h1>
                B: {this.props.b}
            </h1>
        );
    }
}
