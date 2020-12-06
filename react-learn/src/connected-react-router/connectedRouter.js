import React, {Component} from 'react';
import {Router} from 'react-router-dom';
import {createLocationChangeAction} from "./action-creators";
import {ReactReduxContext} from 'react-redux';

class ConnectedRouter extends Component {
    static contextType = ReactReduxContext;
    componentDidMount() {
        const history = this.props.history;
        this.unListen = history.listen((location,action)=>{
            const changeLocationAction = createLocationChangeAction(location,action);
            this.context.store.dispatch(changeLocationAction);
        });
    }

    componentWillUnmount() {
        this.unListen && this.unListen();
    }

    render() {
        return(
            <Router history={this.props.history}>
                {this.props.children}
            </Router>
        );
    }
}

export default ConnectedRouter;