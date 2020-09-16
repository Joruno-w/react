import React, {Component} from 'react';

function A(props,ref) {
    return (
        <h1 ref={ref}>你好啊！</h1>
    )
}

const NewA = React.forwardRef(A);

class App extends Component {
    constructor(props) {
        super(props);
        this.hRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.hRef);
    }

    render() {
        return (
            <NewA ref={this.hRef}/>
        );
    }
}

export default App;
