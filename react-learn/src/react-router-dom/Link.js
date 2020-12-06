import React from 'react';
import ctx from "../react-router/RouterContext";
import {parsePath} from "history";
function Link(props) {
    const {to,...rest} = props;
    return <ctx.Consumer>
        {value=>{
            let loc;
            if (typeof props.to === "object"){
                loc = props.to;
            }else{
                loc = parsePath(props.to);
            }
            const href = value.history.createHref(loc);
            return <a {...rest} href={href} onClick={e=>{
                e.preventDefault();
                value.history.push(loc);
            }}>{props.children}</a>
        }}
    </ctx.Consumer>
}

export default Link;