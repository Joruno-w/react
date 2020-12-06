import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
class Prompt extends Component {
    static defaultProps = {
        when: true,
        message: ''
    };
    componentDidMount() {
        this.handleBlock();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.handleBlock();
    }

    handleBlock = ()=>{
        if (this.props.when){
            this.unBlock = this.props.history.block(this.props.message);
        }else{
            this.unBlock && this.unBlock();
        }
    };

    componentWillUnmount() {
        this.unBlock && this.unBlock();
    }

    render() {
        return null;
    }
}

export default withRouter(Prompt);