import React, {Component} from 'react';

class Comp extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef(); //{current: null}
    }

    handleClick = ()=>{
        // this.refs.txt.focus();
        this.inputRef.current.focus();
    }

    // inputRef = ele=>{
    //     this.text = ele;
    // }


    render() {
        return (
            <div>
                <input type="text" ref='txt'/>
                <button onClick={this.handleClick}>聚焦</button>
            </div>
        );
    }
}

export default Comp;
