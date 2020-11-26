import React from 'react';

function _Layout(props) {
    return (
        <div>
            <h1>sub通用的布局</h1>
            {props.children}
        </div>
    );
}

export default _Layout;