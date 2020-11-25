import React from 'react';
import ctx from "./ctx";
function Provider(props) {
    return (
        <ctx.Provider value={props.store}>
            {props.children}
        </ctx.Provider>
    );
}

export default Provider;