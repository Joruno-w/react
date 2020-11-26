import React from 'react';
import {Link} from "./index";
import ctx from "../react-router/RouterContext";
import {parsePath} from "history";
import pathMatch from "../react-router/pathToRegexp";
function NavLink(props) {
    const {activeClass='active',exact=false,sensitive=false,strict=false,...rest} = props;
    return(
        <ctx.Consumer>
            {({location})=>{
                let loc;
                if (typeof props.to === "string"){
                    loc = parsePath(props.to);
                }
                const result  = pathMatch(loc.pathname,location.pathname,{exact,strict,sensitive});
                if (result){
                    return <Link {...rest} className={activeClass}/>
                }else{
                    return <Link {...rest}/>
                }
            }}
        </ctx.Consumer>
    );
}
export default NavLink;