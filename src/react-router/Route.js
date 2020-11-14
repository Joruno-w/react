import React, {Component} from 'react';
import ctx from "./RouterContext";
import pathMatch from "./pathToRegexp";
class Route extends Component {
    renderChildren(ctx){
        if (this.props.children !== null && this.props.children !== undefined){
            if (typeof this.props.children === "function"){
                return this.props.children(ctx);
            }else{
                return this.props.children;
            }
        }
        if (!ctx.match){
            return null;
        }
        if (typeof this.props.render === "function"){
            return this.props.render(ctx);
        }
        if (this.props.component){
            const Component = this.props.component;
            return  <Component {...ctx}/>
        }
        return null;
    }

    matchRoute(location){
        const {exact=false,path='/',strict=false,sensitive=false} = this.props;
        return pathMatch(path,location.pathname,{
            exact,
            strict,
            sensitive
        });
    }

    consumerFunc = value=>{
        const ctxValue = {
            history: value.history,
            location: value.location,
            match: this.matchRoute(value.location)
        };
        console.log(value);
        return <ctx.Provider value={ctxValue}>
            {this.renderChildren(ctxValue)}
        </ctx.Provider>
    };

    render() {
        return (
            <ctx.Consumer>
                {this.consumerFunc}
            </ctx.Consumer>
        );
    }
}

export default Route;