import React from "react";
import ctx from "./RouterContext";
export default function withRouter(Comp) {
    function RouterWrapper(props) {
        return <ctx.Consumer>
            {value=><Comp {...value} {...props}/>}
        </ctx.Consumer>
    }
    return RouterWrapper;
}