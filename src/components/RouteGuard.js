import React,{Component} from 'react';
import {BrowserRouter as Router,withRouter} from 'react-router-dom';
let preLocation,location,action,unBlock;
class _GuardHelp extends Component{
    componentDidMount() {
        unBlock = this.props.history.block((newLocation,ac)=>{
            preLocation = this.props.location;
            location = newLocation;
            action = ac;
            return "";
        });

        this.unListen = this.props.history.listen((location,action)=>{
            this.props.onChange && this.props.onChange(preLocation,location,action,this.unListen);
        });
    }

    componentWillUnmount() {
        unBlock();
        this.unListen();
    }

    render() {
        return null;
    }
}

const GuardHelp = withRouter(_GuardHelp);

class RouteGuard extends Component {
    handleConfirm = (msg,commit)=>{
        this.props.onBeforeChange && this.props.onBeforeChange(preLocation,location,action,commit,unBlock);
    }

    render() {
        return(
            <Router getUserConfirmation={this.handleConfirm}>
                <GuardHelp onChange={this.props.onChange}/>
                {this.props.children}
            </Router>
        );
    }
}
export default RouteGuard;