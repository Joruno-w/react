import React from 'react';
import {Route} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import 'animate.css';

function TransitionRoute(props) {
    const {component: Component,...rest} = props;
    return (
        <Route {...rest}>
            {({match})=>(
                <CSSTransition in={!!match} timeout={500} classNames={{
                    enterActive: 'animate__animated animate__fast animate__fadeInRight',
                    exitActive: 'animate__animated animate__fast animate__fadeOutLeft',
                }} mountOnEnter unmountOnExit>
                    <Component/>
                </CSSTransition>
            )}
        </Route>
    );
}

export default TransitionRoute;