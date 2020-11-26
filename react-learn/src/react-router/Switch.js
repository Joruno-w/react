import React, {Component} from 'react';
import ctx from "./RouterContext";
import pathMatch from "./pathToRegexp";
import {Route} from "./index";
class Switch extends Component {

    getMatchChild = ({location})=>{
        let children = [];
        if (Array.isArray(this.props.children)){
            children = this.props.children;
        }else if (typeof this.props.children === "object"){
            children = [this.props.children];
        }
        for (const child of children){
            if (child.type !== Route){
                throw new TypeError("child must be a Route type");
            }
            const {exact=false,path='/',sensitive=false,strict=false} = child.props;
            const result = pathMatch(path,location.pathname,{exact,sensitive,strict});
            if (result){
                return child;
            }
        }
        return null;
    };

    render() {
        return <ctx.Consumer>
            {this.getMatchChild}
        </ctx.Consumer>
    }
}

export default Switch;