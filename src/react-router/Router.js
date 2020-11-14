import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ctx from "./RouterContext";
import pathMatch from "./pathToRegexp";

class Router extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
        children: PropTypes.node
    };

    componentDidMount() {
        this.unListen = this.props.history.listen((location,action)=>{
            this.setState({
                location
            });
        });
    }

    componentWillUnmount() {
        this.unListen();
    }

    state = {
        location: this.props.history.location
    }


    render() {
        const ctxValue = {
            history: this.props.history,
            location: this.state.location,
            match: pathMatch('/',this.state.location.pathname)
        };
        return (
            <ctx.Provider value={ctxValue}>
                {this.props.children}
            </ctx.Provider>
        );
    }
}
export default Router;